import {EmailAdvertisement} from "./emailAdvertisement";
import {SmsAdvertisement} from "./smsAdvertisement";
import {Schedule} from "./schedule";
import {MailingList} from "../../components/workspace/contacts/mailingList";

export class OrderForm{
  orderName:string
  emailAdvertisement: EmailAdvertisement
  smsAdvertisement: SmsAdvertisement
  mailingListId: string
  sendTypes: string
  schedule: Schedule[]

  constructor(orderName:string,emailAdvertisement: EmailAdvertisement, smsAdvertisement: SmsAdvertisement,
              mailingListId: string, sendTypes: string, schedule: Schedule[]) {
    this.orderName=orderName
    this.emailAdvertisement = emailAdvertisement;
    this.smsAdvertisement = smsAdvertisement;
    this.mailingListId = mailingListId;
    this.sendTypes = sendTypes;
    this.schedule = schedule;
  }
}

export class FullOrderForm extends OrderForm{
  mailingList: MailingList
}
