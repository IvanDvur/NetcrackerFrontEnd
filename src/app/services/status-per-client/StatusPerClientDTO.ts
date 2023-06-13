import {Client} from "../../components/workspace/contacts/mailingList";

export class StatusPerClientDTO{
  id?:string
  client:Client
  emailStatusPerClient:string
  smsStatusPerClient:string

}
