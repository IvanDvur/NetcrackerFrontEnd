import {FullOrderForm, OrderForm} from "../../../services/order/order-model";
import {Buffer} from "buffer";
import {TranslationService} from "../../../services/translation/translation.service";

export class OrderDTO{
  orderName:string
  template: string
  clientListName:string
  sendStartDate: string
  emailStatus:string
  smsStatus:string

  constructor(order:FullOrderForm) {
    const decodedHtml = Buffer.from(order.emailAdvertisement.template,'base64').toString('binary')
    this.orderName = order.orderName;
    this.template = decodedHtml;
    this.clientListName = order.mailingList.name
    this.sendStartDate = order.schedule[0].timeToSend;
    this.emailStatus = TranslationService.translate(order.schedule[0].emailStatus);
    this.smsStatus = TranslationService.translate(order.schedule[0].smsStatus);
  }

}
