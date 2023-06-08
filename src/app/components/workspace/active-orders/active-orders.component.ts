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
}
