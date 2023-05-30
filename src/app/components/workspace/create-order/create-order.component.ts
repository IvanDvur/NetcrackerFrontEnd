import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import sampleTamplate from './src.json'
import {Time} from "@angular/common";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import {ContactsService} from "../../../services/contacts/contacts.service";
import {MailingList} from "../contacts/mailingList";
import {OrderForm} from "../../../services/order/order-model";


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService) {

  }

  orderForm!: FormGroup
  emailForm!: FormGroup
  smsForm!: FormGroup

  private orderInfo: OrderForm
  mailingLists: MailingList[]
  visible = false
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
  private emailEditor: EmailEditorComponent
  private id: string;


  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      clientListId: ['', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]],
    })
    this.emailForm = this.formBuilder.group({
      topic: ['', [Validators.required, Validators.minLength(4)]],
      template: ['', [Validators.required, Validators.minLength(10)]],
      image: [null],
    })
    this.smsForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(5)]]
    })
    this.contactsService.fetch().subscribe(data => {
      this.mailingLists = data
    })
  }

  showDialog() {
    this.visible = true
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
