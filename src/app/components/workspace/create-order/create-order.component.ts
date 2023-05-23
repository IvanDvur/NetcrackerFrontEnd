import { Component } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {

  startImmediately = false;
  chooseDate = false;
  dateInterval = false;
  selectDataVisible = false;
  selectDataRangeVisible = false;
  text!: string;
  selectedDate!: Date;
  selectedFile!: File;
  handleCheckboxChange(checkbox: string) {
    if (checkbox == 'startImmediately') {

      this.chooseDate = false;
      this.dateInterval = false;
      this.selectDataVisible = false;
      this.selectDataRangeVisible = false;
    } else if (checkbox == 'chooseDate') {
      this.startImmediately = false;
      this.dateInterval = false;
      this.selectDataVisible = true;
      this.selectDataRangeVisible = false;
    } else if (checkbox == 'dateInterval') {
      this.startImmediately = false;
      this.chooseDate = false;
      this.selectDataVisible = false;
      this.selectDataRangeVisible = true;
    }
  }
  selectFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  ChangeInput(event: any) {
    this.selectedFile = event.target.files[0];
    //тут действия с файлом
  }

  onFileDropped(event: any) {
    event.preventDefault();
    this.selectedFile = event.dataTransfer.files[0];
    // действия с файлом
    console.log('Файл загружен:', this.selectedFile);
  }

  onDragOver(event: any) {
    event.preventDefault();
    console.log('Файл над зоной');
  }

  onDragLeave(event: any) {
    event.preventDefault();
  }

  Send()
  {

  }

}
