import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ImportService} from "../../../services/import/import.service";
import {TokenStorageService} from "../../../services/auth/token-storage.service";
import {MessageService} from "primeng/api";
import {CsvValidationService} from "../../../services/csv-validation/csv-validation.service";
import {MailingListForm} from "../import/model/mailingListForm";


@Component({
  selector: 'app-import-window',
  templateUrl: './import-window.component.html',
  styleUrls: ['./import-window.component.css'],
})
export class ImportWindowComponent {

  public readonly myFormGroup: FormGroup;
  private selectedFiles?: FileList;
  private currentFile?: File;

  constructor(private service: ImportService,
              private readonly formBuilder: FormBuilder,
              private token: TokenStorageService,
              private messageService: MessageService,
              private csvValidationService: CsvValidationService) {

    csvValidationService.messageService = messageService;
    this.myFormGroup = this.formBuilder.group({name: [], file: []});
  }

  showSuccess(name: string) {
    this.messageService.add({
      sticky: true,
      severity: 'success',
      summary: 'Готово!',
      detail: 'Список контактов ' + '"' + name + '"' + ' успешо добавлен.'
    });
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Ошибка', detail: 'Заполните все поля'});
  }

  showServerError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Ошибка сервера',
      detail: 'Упс! Не смогли добавить ваш список. Попробуйте позже'
    });
  }

  showNotValidCsvFileError() {
    this.messageService.add({severity: 'error', summary: 'Ошибка', detail: 'Проверьте правильность данных в файле'});
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  public onClickSubmit(): void {
    if (this.myFormGroup.invalid || this.selectedFiles?.item(0) == null) {
      this.showError()
      return;
    }
    this.currentFile = this.selectedFiles.item(0)
    if (this.currentFile) {
      // this.currentFile = file;
      this.csvValidationService.validateCSV(this.currentFile)
        .then(isValid => {
          if (isValid) {
            this.uploadMailingList(this.myFormGroup.getRawValue(), this.currentFile)
            console.log('CSV файл прошел валидацию.');
          } else {

            console.log('CSV файл не прошел валидацию.');
          }
        });
      console.log(this.currentFile)
    }
  }

  uploadMailingList(form: MailingListForm, file: File) {
    this.service.upload(form, file)
      .subscribe({
        next: res => {
          console.log('saved')
          this.showSuccess(this.myFormGroup.getRawValue().name)
          this.myFormGroup.get('name').setValue('');
          this.myFormGroup.get('file').setValue('');
        },
        error: err => {
          this.showServerError()
        }
      });
  }

}
