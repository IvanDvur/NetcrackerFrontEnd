
import {Buffer} from "buffer";

export class TemplateCard {
  id:string
  jsonModel: string
  html: string
  image: any

  constructor(id:string,jsonModel: string, html: string,image: any) {
    this.id = id
    this.jsonModel = Buffer.from(jsonModel,'base64').toString('UTF-8')
    this.html = Buffer.from(html,'base64').toString('UTF-8')
    this.image = image;
  }



}
