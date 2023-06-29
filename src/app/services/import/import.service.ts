import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {MailingListForm} from "../../components/workspace/import/model/mailingListForm";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ImportService {

  private baseUrl = 'http://data-service:8080';
  constructor(private http: HttpClient) {
  }

  upload(form: MailingListForm,file:File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData()
    formData.append('file', file)
    formData.append('name', form.name)
    return this.http.post<any>(this.baseUrl+"/import",formData);
  }
}
