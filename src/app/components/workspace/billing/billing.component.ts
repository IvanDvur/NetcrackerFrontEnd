import {Component} from '@angular/core';
import {BillingService} from "../../../services/billing/billing.service";
import {MessageService} from "primeng/api";
import {TokenStorageService} from "../../../services/auth/token-storage.service";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  providers: [MessageService]
})
export class BillingComponent {

  constructor(private service: TokenStorageService,
              private billingSerice: BillingService,
              private messageService:MessageService) {
  }

  changeTariff(tariff: string) {
    this.billingSerice.changeTariff(tariff).subscribe({
      next: res => {
        console.log(res)
        this.messageService.add({severity:'success',summary: "Успешно!",detail: "Тариф успешно изменён"})
        this.service.saveToken(res.value)
      },error: err => {
        console.log(err)
        this.messageService.add({severity:'error',summary: "Ошибка",detail: "Не удалось сменить тариф"})
      }
    }
    )
  }
}
