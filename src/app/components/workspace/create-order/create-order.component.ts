import {Component, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import sampleTamplate from './src.json'

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {


  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  selectDataVisible: boolean;
  text!: string;
  selectedDate!: Date;

  emailStepperV: boolean=false;
  smsStepperV: boolean=false;
  StartVisible:boolean=true;
  btnExVisible:boolean=false;


  startChoose: any;
  chooseTime: any;
  private CdkStepperr: any;

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  // called when the editor is created
  editorLoaded(event:any) {
    console.log('editorLoaded');
    this.emailEditor.editor.loadDesign(sampleTamplate);
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  // called when the editor has finished loading
  editorReady(event:any) {
    console.log('editorReady');
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



  start()
  {
    if(this.startChoose=="sms")
    {
      this.StartVisible=false;
      this.smsStepperV = true;
      this.btnExVisible=true;

    }
      if(this.startChoose=="email")
      {
        this.StartVisible=false;
        this.emailStepperV = true;
        this.btnExVisible=true;
      }
  }

  @ViewChild('emailStepper') email!: MatStepper;
  @ViewChild('smsStepper') sms!: MatStepper;
  restart(stepper1: MatStepper,stepper2: MatStepper)
  {
    stepper1.reset()
    stepper2.reset()
    this.StartVisible=true;
    this.smsStepperV = false;
    this.btnExVisible=false;
    this.emailStepperV = false;
  }

}
