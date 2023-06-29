import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenDto} from "../auth/token-dto";


const changeTariffURL = 'http://data-service:8080/tariff/change'
@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private httpClient: HttpClient) { }

  changeTariff(tariff: string):Observable<TokenDto>{
    const formData:FormData = new FormData()
    formData.append('plan',tariff)
    return this.httpClient.post<TokenDto>(changeTariffURL,formData)
  }

}
