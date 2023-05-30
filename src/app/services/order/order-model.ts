import {EmailAdvertisement} from "./emailAdvertisement";
import {SmsAdvertisement} from "./smsAdvertisement";
import {Schedule} from "./schedule";

export class OrderForm{
  emailAdvertisement: EmailAdvertisement
  smsAdvertisement: SmsAdvertisement
  mailingListId: string
  sendTypes: string
  schedule: Schedule
}
