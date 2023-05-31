import {Component, OnInit} from '@angular/core';
import {MailingList} from "./mailingList";
import {Table} from "primeng/table";
import {ContactsService} from "../../../services/contacts/contacts.service";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent {

  mailingLists: MailingList[];


  constructor(private contactsService: ContactsService) {
  }

  ngOnInit() {
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
