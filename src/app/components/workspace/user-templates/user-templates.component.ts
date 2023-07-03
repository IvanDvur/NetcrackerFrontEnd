import {Component, OnInit, ViewChild} from '@angular/core';
import {TemplateService} from "../../../services/template/template.service";
import {TemplateCard} from "../../../services/template/TemplateCard";
import {Router} from "@angular/router";
import {EditTemplateService} from "../../../services/template/edit-template.service";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-user-templates',
  templateUrl: './user-templates.component.html',
  styleUrls: ['./user-templates.component.scss'],
  providers: [MessageService]
})
export class UserTemplatesComponent implements OnInit {

  templates: TemplateCard[] = []
  canAddTemplateButtonDisabled:boolean;

  constructor(private editTemplateService: EditTemplateService, private templateService: TemplateService, private router: Router, private messageService:MessageService) {
  }


  ngOnInit(): void {
    this.templateService.fetchAllTemplatesByCustomer().subscribe({
      next: res => {
        res.forEach(x => {
          this.templates.push(new TemplateCard(x.id, x.jsonFile, x.htmlFile, x.image))
        })
        this.canAddTemplateButtonDisabled = this.checkTariff()
        console.log(this.canAddTemplateButtonDisabled)
        console.log(this.templates.length)
      },
      error: err => {
        console.log('error')
      }
    })
  }

  editEmail(template: TemplateCard) {
    this.editTemplateService._template = template;
    this.router.navigate(['/workspace/edit-template'])
  }

  deleteTemplate(id: string) {
    this.templateService.deleteTemplateById(id).subscribe({
      next: res => {
        this.templates = []
        this.ngOnInit()
      },
      error:err => {}
    })
  }

  checkTariff():boolean{
    let role = sessionStorage.getItem('role')
    switch (role){
      case "USER":
        return this.templates.length < 3
      case "USER_PLUS":
        return this.templates.length < 10
      case "USER_PREMIUM":
        return this.templates.length < 30
      default:
        return false
    }
  }

  showError() {
    if(this.canAddTemplateButtonDisabled){
      console.log("error dobablenya")
      this.messageService.add({severity:"error",summary:"Ошибка", detail:"Кол-во темплейтов превышает допустимое по тарифу"})
    }
  }
}
