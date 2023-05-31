import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import sampleTamplate from './src.json'
import {Time} from "@angular/common";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import {MailingList} from "../contacts/mailingList";
import {ContactsService} from "../../../services/customer/contacts.service";



@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit{
  ngOnInit(): void {
    this.contactsService.fetch().subscribe(data => {
      this.mailingLists = data
    })

    this.orderForm=new FormGroup({
      emailFormGroup:new FormGroup({
        topic:new FormControl('', Validators.required),
        template:new FormControl('',Validators.required)
      }),
      smsFormGroup:new FormGroup({
        textSms:new FormControl('',Validators.required),
      }),
      dateFormGroup:new FormGroup({
        schedule:new FormControl('',Validators.required),
        clientListId:new FormControl('',Validators.required)
      }),


    })
  }
  // firstFormGroup = this.formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this.formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  // thirdFormGroup = this.formBuilder.group({
  //   thirdCtrl: ['', Validators.required],
  // });
  fourFormGroup = this.formBuilder.group({
    fourCtrl: ['', Validators.required],
  });
  fiveFormGroup = this.formBuilder.group({
    fiveCtrl: ['', Validators.required],
  });



  constructor(private formBuilder: FormBuilder,private contactsService:ContactsService) {
  }
  orderForm: FormGroup;
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
  valid:boolean;
  mailingLists: MailingList[];


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
    this.orderForm.get('dateFormGroup').get('schedule').setValidators(Validators.required)
    this.orderForm.get('dateFormGroup').get('schedule').updateValueAndValidity()
  }

  onStartImme(event: Event) {
    this.selectDataVisible = false;
    console.log(this.orderForm.get('dateFormGroup'))
    this.orderForm.get('dateFormGroup').get('schedule').clearValidators()
    this.orderForm.get('dateFormGroup').get('schedule').updateValueAndValidity()
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


  onSubmit(value:any) {
    console.log(value);

  }
}
