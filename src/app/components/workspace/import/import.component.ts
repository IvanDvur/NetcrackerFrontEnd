import {Component, OnInit} from '@angular/core';
import {ImportService} from "../../../services/import/import.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from "../../../services/auth/token-storage.service";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
  providers: [MessageService]
})
export class ImportComponent implements OnInit {

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
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ngOnInit(): void {

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
            this.showError()
          }
        });
      console.log(this.currentFile)
    }

  }


  check() {
    console.log(this.token.getToken())
  }
}
