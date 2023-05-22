import {Component, OnInit} from '@angular/core';
import {ImportService} from "../services/import.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  public readonly myFormGroup: FormGroup;
  private selectedFiles?: FileList;
  private currentFile?: File;

  constructor(private service: ImportService, private readonly formBuilder: FormBuilder) {
    this.myFormGroup = this.formBuilder.group({name: [], file: []});
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  ngOnInit(): void {

  }
  ChangeInput(event: any) {
    //тут действия с файлом
  }

  onFileDropped(event: any) {

  }

  onDragOver(event: any) {

  }

  onDragLeave(event: any) {

  }

  public onClickSubmit(): void {
    if (this.myFormGroup.invalid || this.selectedFiles?.item(0)==null) {
      alert('Invalid input');
      return;
    }
    const file: File | null = this.selectedFiles.item(0)
    if(file){
      this.currentFile = file;
      this.service.upload(this.myFormGroup.getRawValue(),this.currentFile)
        .subscribe((): void => {
          alert('Saved!');
        });
      console.log(this.currentFile)
    }

  }


}
