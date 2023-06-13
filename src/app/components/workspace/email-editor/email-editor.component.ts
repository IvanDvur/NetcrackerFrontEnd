import {Component, ViewChild} from '@angular/core';
import sampleTamplate from "./src.json";
import {EmailEditorComponent} from "../../../../../projects/email-editor/src/lib/email-editor.component";

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class CustomEmailEditorComponent {

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent


  editorLoaded(event: any) {
    console.log('editorLoaded');
    this.emailEditor.editor.loadDesign(sampleTamplate);
  }

  // called when the editor has finished loading
  editorReady(event: any) {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => {
      const { html, design } = data;
      console.log('exportHtml', design,html);
      }
    );
  }
}
