import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {ContactsService} from "../../../services/contacts/contacts.service";
import {Client} from "../contacts/mailingList";
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactsService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetchClient()
  }

  fetchClient() {
    this.route.params.subscribe((params: Params) => {
      console.log(params?.['id'])
      this.contactService.fetchMailingListById(params?.['id']).subscribe(data => {
        this.clients = data.clients
        this.mailingListId = data.id
        this.mailingListName = data.name
      })
    })
  }

  mailingListId: string
  mailingListName: string
  clientDialog: boolean;
  editClientFlag: boolean
  addClientFlag: boolean
  clients: Client[];

  client: Client;

  selectedClients: Client[];

  submitted: boolean;

  statuses: any[];

  openNew() {
    this.client = {};
    this.addClientFlag = true
    this.editClientFlag = false
    this.submitted = false;
    this.clientDialog = true;
  }

  deleteSelectedClients() {

  }

  editClient(client: Client) {
    this.editClientFlag = true
    this.addClientFlag = false
    this.client = {...client};
    this.clientDialog = true;
  }

  deleteClient(client: Client) {
    this.confirmationService.confirm({
      message: 'Вы действительно хотите удалить этот контакт?',
      header: 'Подтверждение',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.contactService.deleteClient(client.id).subscribe(data => {
          this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Контакт удален', life: 3000});
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
    this.contactService.updateClient(this.client).subscribe(
      data => {
        this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Контакт обновлен', life: 3000});
        this.clientDialog = false;
        this.fetchClient()
      });
    this.client = {};
  }

  saveClient() {
    this.contactService.saveClient(this.client, this.mailingListId).subscribe({
        next: res => {
          this.messageService.add({severity: 'success', summary: 'Успех', detail: 'Контакт добавлен в список'})
          this.fetchClient()
        },
        error: err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Ошибка',
            detail: 'Не смогли добавить контакт. Обновите страницу или попробуйте позже'
          })
        }
      }
    )
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
}
