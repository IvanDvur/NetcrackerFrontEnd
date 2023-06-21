import {Injectable} from '@angular/core';
import {TemplateCard} from "./TemplateCard";

@Injectable({
  providedIn: 'root'
})
export class EditTemplateService {

  _template: TemplateCard

  constructor() {
  }

}
