import {FullOrderForm, OrderForm} from "../../../services/order/order-model";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import {Buffer} from "buffer";

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
    this.emailStatus = order.schedule[0].emailStatus;
    this.smsStatus = order.schedule[0].smsStatus;
  }

}
