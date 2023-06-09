import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Clients, MailingList, MailingListDto} from "../../components/workspace/contacts/mailingList";


const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl = 'http://localhost:8080'


  constructor(private http:HttpClient) {

  }

  delete(id:string):Observable<any>{
    const formData:FormData = new FormData()
    formData.append('id',id)
    return this.http.post<any>(this.baseUrl+"/lists/delete",formData)
  }

  fetch(): Observable<MailingList[]>{
    return this.http.get<MailingList[]>(this.baseUrl+"/lists",httpOptions);
  }
  fetchMailingListById(id:string): Observable<MailingListDto>{
    return this.http.get<MailingListDto>(this.baseUrl+"/lists/"+id,httpOptions);
  }
  updateClient(client:Clients): Observable<Clients>{
    return this.http.post(this.baseUrl+"/lists/update/client",client,httpOptions)
  }
  deleteClient(id:string):Observable<any>{
    const formData:FormData=new FormData()
    formData.append('id',id);
    return this.http.post<any>(this.baseUrl+'/lists/delete/client',formData)
  }

}
