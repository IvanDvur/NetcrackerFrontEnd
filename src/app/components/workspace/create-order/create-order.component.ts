import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import sampleTamplate from './src.json'
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import {MailingList} from "../contacts/mailingList";
import {ContactsService} from "../../../services/contacts/contacts.service";
import {OrderForm} from "../../../services/order/order-model";
import {SmsAdvertisement} from "../../../services/order/smsAdvertisement";
import {EmailAdvertisement} from "../../../services/order/emailAdvertisement";
import {Schedule} from "../../../services/order/schedule";
import {Buffer} from "buffer";
import moment from "moment";
import {OrderService} from "../../../services/order/order.service";
import {HttpClient} from "@angular/common/http";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {ImportService} from "../../../services/import/import.service";


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
  providers: [MessageService]
})
export class CreateOrderComponent implements OnInit {

  @ViewChild('singleStepper') s!: MatStepper;
  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent
  orderForm: FormGroup;
  importForm: FormGroup
  sessionData: any = {}
  orderRequest: OrderForm;
  selectDataVisible: boolean;
  private text!: string;
  minDate: Date;
  isStarted: boolean = false;
  emailStepperV: boolean = false;
  smsStepperV: boolean = false;
  private chooseDate: any;
  private valid: boolean;
  mailingLists: MailingList[];
  visible: boolean;

  constructor(private formBuilder: FormBuilder,
              private contactsService: ContactsService,
              private orderService: OrderService,
              private messageService: MessageService,
              private importService: ImportService) {
  }

  showSuccess() {
    this.messageService.add({
      sticky: true,
      severity: 'success',
      summary: 'Готово!',
      detail: 'Заявка на рассылку успешно отправлена'
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: 'Упс! Ошибка соединения с сервером. Попробуйте позже'
    });
  }

  ngOnInit(): void {
    this.minDate = moment(new Date()).add(10, 'm').toDate();
    this.fetchLists()
    this.orderForm = new FormGroup({
      emailFormGroup: new FormGroup({
        topic: new FormControl('', Validators.required),
        template: new FormControl('', Validators.required)
      }),
      smsFormGroup: new FormGroup({
        textSms: new FormControl('', Validators.required),
      }),
      dateFormGroup: new FormGroup({
        schedule: new FormControl('', Validators.required),
        clientListId: new FormControl('', Validators.required)
      }),
    })
  }

  // called when the editor is created
  editorLoaded(event: any) {
    console.log('editorLoaded');
    this.emailEditor.editor.loadDesign(sampleTamplate);
  }

  // called when the editor has finished loading
  editorReady(event: any) {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => {
        console.log('exportHtml', data)
        this.orderForm.get('emailFormGroup').get('template').setValue(data.html)
      }
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

  onSubmit(value: any) {
    const encodedTemplate = Buffer.from(value.emailFormGroup.template).toString('base64')
    const topic = value.emailFormGroup.topic
    const image = null
    const textSms = value.smsFormGroup.textSms
    const mailingListId = value.dateFormGroup.clientListId
    let schedule;
    if (!this.selectDataVisible) {
      schedule = new Schedule(moment(new Date()).add(1, 'minute').format("DD-MM-YYYY HH:mm"))
    } else {
      schedule = new Schedule(moment(value.dateFormGroup.schedule).format("DD-MM-YYYY HH:mm"))
    }
    let sendTypes = "";
    if (this.emailStepperV) {
      sendTypes = sendTypes.concat("EMAIL,")
    }
    if (this.smsStepperV) {
      sendTypes = sendTypes.concat("SMS,")
    }
    console.log(value);
    this.orderRequest = new OrderForm('name',
      new EmailAdvertisement(encodedTemplate, topic, image),
      new SmsAdvertisement(textSms),
      mailingListId, sendTypes, [schedule])
    console.log(this.orderRequest)
    this.orderService.postOrder(this.orderRequest).subscribe({
      next: res => {
        this.showSuccess()
        this.ngOnInit()
      },
      error: err => {
        this.showError();
      }
    })
  }

  showDialog() {
    this.visible = true;
  }

  fetchLists() {
    this.contactsService.fetch().subscribe({
      next: data => {
        this.mailingLists = data
      }, error: err => {
        this.showError()
      }
    })
  }
}
