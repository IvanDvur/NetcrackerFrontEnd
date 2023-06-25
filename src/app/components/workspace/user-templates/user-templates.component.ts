import {Component, OnInit, ViewChild} from '@angular/core';
import {TemplateService} from "../../../services/template/template.service";
import {TemplateCard} from "../../../services/template/TemplateCard";
import {Router} from "@angular/router";
import {EditTemplateService} from "../../../services/template/edit-template.service";


@Component({
  selector: 'app-user-templates',
  templateUrl: './user-templates.component.html',
  styleUrls: ['./user-templates.component.scss'],
})
export class UserTemplatesComponent implements OnInit {


  templates: TemplateCard[] = []

  constructor(private editTemplateService: EditTemplateService, private templateService: TemplateService, private router: Router) {
  }

  ngOnInit(): void {
    this.templateService.fetchAllTemplatesByCustomer().subscribe({
      next: res => {
        res.forEach(x => {
          this.templates.push(new TemplateCard(x.id, x.jsonFile, x.htmlFile, x.image))
        })
        console.log(this.templates)
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
}
