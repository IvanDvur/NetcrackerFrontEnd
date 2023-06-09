import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {ContactsService} from "../../../services/contacts/contacts.service";
import {Clients} from "../contacts/mailingList";
import {ActivatedRoute, Params} from "@angular/router";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class ContactComponent implements OnInit
{
  constructor(private contactService: ContactsService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.fetchClient()

  }

  fetchClient(){
    this.route.params.subscribe((params:Params)=>{
      console.log(params?.['id'])
      this.contactService.fetchMailingListById(params?.['id']).subscribe(data=>{
        this.clients=data.clients
      })
    })
  }
  clientDialog: boolean;

  clients: Clients[];

  client: Clients;

  selectedProducts: Clients[];

  submitted: boolean;

  statuses: any[];

  openNew() {
    this.client = {};
    this.submitted = false;
    this.clientDialog = true;
  }

  deleteSelectedProducts() {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete the selected products?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.products = this.products.filter((val) => !this.selectedProducts.includes(val));
    //     this.selectedProducts = null;
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    //   }
    // });
  }

  editClient(client: Clients) {
    this.client = { ...client };
    this.clientDialog = true;
  }

  deleteClient(client: Clients) {
    this.confirmationService.confirm({
      message: 'Вы действительно хотите удалить этот контакт?',
      header: 'Подтверждение',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
       this.contactService.deleteClient(client.id).subscribe(data=>{
         this.messageService.add({ severity: 'success', summary: 'Успех', detail: 'Контакт удален', life: 3000 });
         this.fetchClient()
       })
        this.client = {};

      }
    });
  }

  hideDialog() {
    this.clientDialog = false;
    this.submitted = false;
  }
  updateClients() {
    this.submitted = true;
    this.contactService.updateClient(this.client).subscribe(data=>{
      this.messageService.add({ severity: 'success', summary: 'Успех', detail: 'Контакт обновлен', life: 3000 });
      this.clientDialog = false;
      this.fetchClient()
    });
    this.client = {};
  }
  saveProduct() {
    // this.submitted = true;
    //
    // if (this.client.firstName.trim()) {
    //   if (this.product.id) {
    //     this.clients[this.findIndexById(this.product.id)] = this.product;
    //
    //   } else {
    //     this.product.id = this.createId();
    //     this.product.image = 'product-placeholder.svg';
    //     this.clients.push(this.product);
    //    // this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    //   }
    //
    //   this.clients = [...this.clients];
    //   this.productDialog = false;
    //   this.product = {};
    // }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string):any {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }



}
