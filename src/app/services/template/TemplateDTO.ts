export class TemplateDTO{
  id:string
  htmlFile: any
  jsonFile: any
  image: any

  constructor(id: string, htmlFile: any, jsonFile: any,image:any) {
    this.id = id;
    this.htmlFile = htmlFile;
    this.jsonFile = jsonFile;
    this.image = image;
  }
}
