
export interface MailingList {
  id?: number;
  name?: string;
  quantityOfClients?: number;
}
export interface MailingListDto {
  id?:string;
  name?:string;
  clients:Clients[]



}
export interface Clients{
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  properties?:string;

}
