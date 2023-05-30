import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import sampleTamplate from './src.json'
import {Time} from "@angular/common";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";



@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent{
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourFormGroup = this.formBuilder.group({
    fourCtrl: ['', Validators.required],
  });
  fiveFormGroup = this.formBuilder.group({
    fiveCtrl: ['', Validators.required],
  });



  constructor(private formBuilder: FormBuilder) {
  }

  visible=false
  selectDataVisible: boolean;
  text!: string;
  date: Date[];
  isStarted: boolean = false;
  emailStepperV: boolean = false;
  smsStepperV: boolean = false;
  chooseDate: any;
  selectedDate!: Date;
  selectedTime: Time;

  @ViewChild('singleStepper') s!: MatStepper;
  @ViewChild(EmailEditorComponent)
  private emailEditor:EmailEditorComponent
  private id: string;

  showDialog(){
    this.visible=true
  }
  // called when the editor is created
  editorLoaded(event: any) {
    console.log('editorLoaded');
    this.emailEditor.editor.loadDesign(sampleTamplate);
  }

  // called when the editor has finished loading
  editorReady(event: any) {
    console.log('editorReady');
    this.id = this.emailEditor.editorId;
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }

  onChooseDate(event: Event) {
    this.selectDataVisible = true;
  }

  onStartImme(event: Event) {
    this.selectDataVisible = false;
  }

  selectSms() {
    this.smsStepperV = !this.smsStepperV;
  }

  selectEmail() {
    this.emailStepperV = !this.emailStepperV;
  }

  start() {
    this.isStarted = true;
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  resetEditor() {

  }
}
