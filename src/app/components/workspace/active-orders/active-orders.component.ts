import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OrderService} from "../../../services/order/order.service";
import {OrderDTO} from "./orderDTO";
import {Table} from "primeng/table";

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css'],
})
export class ActiveOrdersComponent implements OnInit{

  activeOrders: OrderDTO[] = []
  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.orderService.fetchActiveOrders().subscribe((data)=>{
      data.forEach((order)=>this.activeOrders.push(new OrderDTO(order)))
      console.log(data)
    })
    console.log(this.activeOrders)
  }

  applyFilterGlobal(event: any) {
    return event.target.value;
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string):any {
    switch (status) {
      case 'Ожидает отправки':
        return {'background': '#3B82F6'};
      case 'Обрабатывается'|| 'В процессе рассылки':
        return {'background':'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'};
      case 'Доставлено':
        return {'background':'green'};
      case 'Ошибка сервера':
        return {'background':'red'};
      case 'Отложено':
        return {'background':'#F59E0B'}
      case '-':
        return {'background':'grey'}
    }
  }

}
