import {Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import sampleTamplate from './src.json'
import {Time} from "@angular/common";


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  FourFormGroup = this._formBuilder.group({
    FourCtrl: ['', Validators.required],
  });
  FiveFormGroup = this._formBuilder.group({
    FiveCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) {}

  selectDataVisible: boolean;
  text!: string;

  singleStepperV: boolean=false;
  emailStepperV: boolean=false;
  smsStepperV: boolean=false;
  StartVisible:boolean=true;
  btnExVisible:boolean=false;

  emailChoose: boolean=false;
  smsChoose:boolean=false;
  chooseDate: any;

  selectedDate!: Date;
  selectedTime: Time;

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;
  private id: string;

  // called when the editor is created
  editorLoaded(event:any) {
    console.log('editorLoaded');
    this.emailEditor.editor.loadDesign(sampleTamplate);
    this.emailEditor.editorId="unlayer-container";
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  // called when the editor has finished loading
  editorReady(event:any) {
    console.log('editorReady');
    this.id=this.emailEditor.editorId;
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }

  onChooseDate(event: Event) {
      this.selectDataVisible = true;
    }

  onStartImme(event: Event)
  {
      this.selectDataVisible = false;
  }

  CheckSms() {
    this.smsChoose = !this.smsChoose;
  }

  CheckEmail() {
    this.emailChoose = !this.emailChoose;
  }

  start()
  {
    this.singleStepperV=true;
    if(this.smsChoose) {
      this.emailStepperV = false;
      this.smsStepperV = true;
    }
    if(this.emailChoose) {
        this.emailStepperV = true;
        this.smsStepperV = false;
    }
    if(this.emailChoose && this.smsChoose) {
        this.emailStepperV = true;
        this.smsStepperV = true;
    }
    this.StartVisible=false;
    this.btnExVisible=true;
  }

  @ViewChild('singleStepper') s!: MatStepper;

  reloadCurrentPage() {
    window.location.reload();
  }


}
