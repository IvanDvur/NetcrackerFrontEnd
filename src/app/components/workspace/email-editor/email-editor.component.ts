import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import sampleTamplate from "./src.json";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";
import {TemplateService} from "../../../services/template/template.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TemplateCard} from "../../../services/template/TemplateCard";
import {EditTemplateService} from "../../../services/template/edit-template.service";
import {TemplateDTO} from "../../../services/template/TemplateDTO";

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class CustomEmailEditorComponent implements OnInit, OnDestroy {

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent

  _templateSource: TemplateCard = null;
  exportButtonVisible = false
  updateButtonVisible = false
  private _isEditing = false

  constructor(private editTemplateService: EditTemplateService, private templateService: TemplateService,
              private route: ActivatedRoute, private router: Router) {
  }

  editorLoaded(event: any) {
    if (this._isEditing) {
      this.emailEditor.editor.loadDesign(JSON.parse(this._templateSource.jsonModel))
    } else {
      console.log('editorLoaded');
      this.emailEditor.editor.loadDesign(sampleTamplate);
    }
  }

  // called when the editor has finished loading
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
          }
        })
        console.log('exportHtml', JSON.stringify(design), html);
      }
    );
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

  ngOnInit(): void {
    this._templateSource = this.editTemplateService._template;
    console.log(this._templateSource)
    if (this._templateSource != null) {
      this._isEditing = true;
      this.updateButtonVisible = true;
    }
  }

  ngOnDestroy() {
    this.editTemplateService._template = null;
  }


}
