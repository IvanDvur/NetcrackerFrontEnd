export class Schedule{
  id:string
  timeToSend:string;
  smsStatus:string
  emailStatus: string
  retriesCount: string
  constructor(timeToSend: string) {
    this.timeToSend = timeToSend;
  }
}
