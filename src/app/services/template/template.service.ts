import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {TemplateDTO} from "./TemplateDTO";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private fetchAllTemplatesURL = "http://data-service:8080/template/findAll"
  private fetchTemplateURL = "http://data-service:8080/template/get"
  private saveTemplateURL = "http://data-service:8080/template/save"
  private updateTemplateURL = "http://data-service:8080/template/update"
  private deleteTemplateURL = "http://data-service:8080/template/delete"


  constructor(private http: HttpClient) {
  }


  fetchTemplateById(id: string): Observable<TemplateDTO> {
    return this.http.get<TemplateDTO>(this.fetchTemplateURL, {params: new HttpParams().set('id', id)})
  }

  fetchAllTemplatesByCustomer(): Observable<TemplateDTO[]> {
    return this.http.get<TemplateDTO[]>(this.fetchAllTemplatesURL)
  }

  deleteTemplateById(id:string):Observable<any>{
    return this.http.post(this.deleteTemplateURL+'/'+id,{})
  }

  saveTemplate(html: string, json: string): Observable<any> {
    const body: FormData = new FormData()
    body.append('htmlFile', html)
    body.append('jsonFile', json)
    return this.http.post(this.saveTemplateURL, body)
  }

  updateTemplateById(id:string,htmlFile:string,jsonFile:string): Observable<any> {
    const body: FormData = new FormData()
    body.append('id', id)
    body.append('html', htmlFile)
    body.append('json', jsonFile)
    console.log(body)
    return this.http.post(this.updateTemplateURL,body)
  }
}
