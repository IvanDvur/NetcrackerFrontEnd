import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatusPerClientDTO} from "./StatusPerClientDTO";

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StatusPerClientService {

  private getClientsStatusesByOrderIdURL = "http://localhost:8080/statusPerClient/"

  constructor(private http:HttpClient) { }


  getClientStatusesByOrderId(id:string):Observable<StatusPerClientDTO[]>{
    return this.http.get<StatusPerClientDTO[]>(this.getClientsStatusesByOrderIdURL+id,httpOptions)
  }
}
