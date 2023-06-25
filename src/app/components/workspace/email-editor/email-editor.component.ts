import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import sampleTamplate from "./src.json";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import {TemplateService} from "../../../services/template/template.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TemplateCard} from "../../../services/template/TemplateCard";
import {EditTemplateService} from "../../../services/template/edit-template.service";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css'],
  providers: [MessageService]
})
export class CustomEmailEditorComponent implements OnInit, OnDestroy {

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent

  _templateSource: TemplateCard = null;
  exportButtonVisible = false
  updateButtonVisible = false
  private _isEditing = false

  constructor(private editTemplateService: EditTemplateService, private templateService: TemplateService,
              private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
  }

  editorLoaded(event: any) {
    if (this._isEditing) {
      this.emailEditor.editor.loadDesign(JSON.parse(this._templateSource.jsonModel))
    } else {
      console.log('editorLoaded');
      this.emailEditor.editor.loadDesign(sampleTamplate);
    }
  }

  editorReady(event: any) {
    if (!this._isEditing) {
      this.exportButtonVisible = true;
    }
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => {
      const {html, design} = data;
      this.templateService.saveTemplate(html, JSON.stringify(design)).subscribe({
        next: res => {
          this.router.navigate(['/workspace/templates'])
        },
        error: err => {
          if (err && err.status) {
            let status: number = err.status;
            if (status == 403) {
              this.messageService.add({
                severity: 'error',
                summary: 'Ошибка',
                detail: 'Кол-во шаблонов превышает доступное по тарифу'
              });
              this.router.navigate(['/workspace/templates'])
            } else if (status == 500) {
              this.messageService.add({
                severity: 'error',
                summary: 'Ошибка',
                detail: 'Не смогли обработать запрос. Попробуйте позже'
              });
              this.router.navigate(['/workspace/templates'])
            }
          }
        }
      })
    });
  }

  updateHtml() {
    this.emailEditor.editor.exportHtml((data) => {
        const {html, design} = data;
        this.templateService.updateTemplateById(this._templateSource.id, html, JSON.stringify(design)).subscribe({
            next: res => {
              this.router.navigate(['/workspace/templates'])
            }, error: err => {

            }
          }
        )
      }
    );
  }

  ngOnInit()
    :
    void {
    this._templateSource = this.editTemplateService._template;
    console.log(this._templateSource)
    if (this._templateSource != null
    ) {
      this._isEditing = true;
      this.updateButtonVisible = true;
    }
  }

  ngOnDestroy() {
    this.editTemplateService._template = null;
  }


}
