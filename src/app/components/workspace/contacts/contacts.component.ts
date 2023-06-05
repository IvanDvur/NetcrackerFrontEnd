import {Component, OnInit} from '@angular/core';
import {MailingList} from "./mailingList";
import {Table} from "primeng/table";
import {ContactsService} from "../../../services/contacts/contacts.service";
import {PrimeNGConfig} from "primeng/api";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent {

  mailingLists: MailingList[];


  constructor(private contactsService: ContactsService,
              private config: PrimeNGConfig,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/ru.json').subscribe((data: any) => {
      this.config.setTranslation(data);
    });
    this.fetchMailingLists()
    console.log(this.mailingLists)
  }

  fetchMailingLists() {
    this.contactsService.fetch().subscribe(data => {
      this.mailingLists = data
      console.log(data);
    });
  }

  deleteMailingList(id:string){
    this.contactsService.delete(id).subscribe(()=>{
      this.fetchMailingLists()
    })
  }

  applyFilterGlobal(event: any) {
    return event.target.value;
  }

  clear(table: Table) {
    table.clear();
  }

}
