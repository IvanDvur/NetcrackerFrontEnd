import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {MailingListForm} from "../../workspace/import/model/mailingListForm";
import {Observable} from "rxjs";
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ImportService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {
  }

  upload(form: MailingListForm,file:File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData()
    formData.append('file', file)
    formData.append('name', form.name)
    const req = new HttpRequest('POST',this.baseUrl+"/import/cont",formData,{
      reportProgress:true,
      responseType: 'json'
    });
    return this.http.post<any>(this.baseUrl+"/import/cont",formData);
  }
}
