import {Component, OnInit} from '@angular/core';
import {StatusPerClientService} from "../../../services/status-per-client/status-per-client.service";
import {StatusPerClientDTO} from "../../../services/status-per-client/StatusPerClientDTO";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {TranslationService} from "../../../services/translation/translation.service";

@Component({
  selector: 'app-status-per-client',
  templateUrl: './status-per-client.component.html',
  styleUrls: ['./status-per-client.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class StatusPerClientComponent implements OnInit {

  statusesPerClient: StatusPerClientDTO[] = []

  constructor(private statusService: StatusPerClientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetchClientsStatuses()
  }

  fetchClientsStatuses() {
    this.route.params.subscribe((params: Params) => {
      console.log(params?.['id'])
      this.statusService.getClientStatusesByOrderId(params?.['id']).subscribe((data) => {
          data.forEach(x=> {
            x.smsStatusPerClient = TranslationService.translate(x.smsStatusPerClient)
            x.emailStatusPerClient = TranslationService.translate(x.emailStatusPerClient)
          })
          this.statusesPerClient = data
          console.log(data)
        }
      )
    })
  }
}
