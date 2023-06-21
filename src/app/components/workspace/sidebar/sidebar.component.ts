import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[]

  constructor() {
    this.items = [
      {
        label: 'Начать работу',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Импортировать клиентскую базу',
            icon: 'pi pi-fw pi-file-import',
            routerLink:'/workspace/import',
          },
          {
            label: 'Списки клиентов',
            icon: 'pi pi-fw pi-book',
            routerLink: '/workspace/contacts'
          },
          {
            label: 'Создать заявку на рассылку',
            icon: 'pi pi-fw pi-envelope',
            routerLink: '/workspace/create-order'
          },
          {
            label: 'Мои шаблоны',
            icon: 'pi pi-fw pi-table',
            routerLink: "/workspace/templates"
          }
        ]
      },
      {
        label: 'Расслыки',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Мои рассылки',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/workspace/active-orders'
          },
        ]
      },
      {
        label: 'Прочее',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Выбрать тариф',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/workspace/billing'
          },
        ]
      },
    ]
  }

  ngOnInit(): void {
  }


}

