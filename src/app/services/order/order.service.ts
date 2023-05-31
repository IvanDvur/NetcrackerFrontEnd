import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FullOrderForm, OrderForm} from "./order-model";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private postOrderURL = 'http://localhost:8080/order/add'
  private activeOrdersURL = 'http://localhost:8080/order/active'
  private finishedOrdersURL = 'http://localhost:8080/order/done'

  constructor(private http: HttpClient) {

  }

  postOrder(orderForm: OrderForm): Observable<any> {
    return this.http.post<any>(this.postOrderURL, orderForm, httpOptions)
  }

  fetchActiveOrders(): Observable<FullOrderForm[]> {
    return this.http.get<FullOrderForm[]>(this.activeOrdersURL,httpOptions)
  }
}
