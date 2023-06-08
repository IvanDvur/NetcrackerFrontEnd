import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ImportService} from "../../../services/import/import.service";
import {TokenStorageService} from "../../../services/auth/token-storage.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-import-window',
  templateUrl: './import-window.component.html',
  styleUrls: ['./import-window.component.css']
})
export class ImportWindowComponent {

  public readonly myFormGroup: FormGroup;
  private selectedFiles?: FileList;
  private currentFile?: File;

  constructor(private service: ImportService,
              private readonly formBuilder: FormBuilder,
              private token: TokenStorageService, private messageService: MessageService) {
    this.myFormGroup = this.formBuilder.group({name: [], file: []});
  }

  showSuccess(name:string) {
    this.messageService.add({sticky:true, severity: 'success', summary: 'Готово!', detail: 'Список контактов '+'"'+name +'"'+' успешо добавлен.'});
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Ошибка', detail: 'Заполните все поля' });
  }

  showServerError() {
    this.messageService.add({ severity: 'error', summary: 'Ошибка сервера', detail: 'Упс! Не смогли добавить ваш список. Попробуйте позже' });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  public onClickSubmit(): void {
    if (this.myFormGroup.invalid || this.selectedFiles?.item(0) == null) {
      this.showError()
      return;
    }
    const file: File | null = this.selectedFiles.item(0)
    if (file) {
      this.currentFile = file;
      this.service.upload(this.myFormGroup.getRawValue(), this.currentFile)
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
      console.log(this.currentFile)
    }
  }

}
