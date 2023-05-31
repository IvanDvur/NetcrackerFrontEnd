export class EmailAdvertisement{
  template:string
  topic:string
  image: File


  constructor(template: string, topic: string, image: File) {
    this.template = template;
    this.topic = topic;
    this.image = image;
  }
}
