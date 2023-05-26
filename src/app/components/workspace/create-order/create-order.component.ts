import {Component, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {Time} from "@angular/common";


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {

  constructor(private _formBuilder: FormBuilder) {}

  selectDataVisible: boolean;
  text!: string;

  singleStepperV: boolean=false;
  emailStepperV: boolean=false;
  smsStepperV: boolean=false;
  StartVisible:boolean=true;
  btnExVisible:boolean=false;

  emailChoose: boolean=false;
  smsChoose:boolean=false;

  selectedDate!: Date;
  chooseTime: Time;


  onChooseDate(event: Event) {
      this.selectDataVisible = true;
    }

  onStartImme(event: Event)
  {
      this.selectDataVisible = false;
  }

  CheckSms() {
    if(!this.smsChoose)
    {
      this.smsChoose=true;
    }
    else {
      this.smsChoose = true;
    }
  }

  CheckEmail() {
    if(!this.emailChoose) {
      this.emailChoose = true;
    }
    else{
      this.emailChoose=false;
    }
  }

  start()
  {
    this.singleStepperV=true;
    if(this.smsChoose) {
      this.emailStepperV = false;
      this.smsStepperV = true;
    }
    if(this.emailChoose) {
        this.emailStepperV = true;
        this.smsStepperV = false;
    }
    if(this.emailChoose && this.smsChoose) {
        this.emailStepperV = true;
        this.smsStepperV = true;
    }
    this.StartVisible=false;
    this.btnExVisible=true;
  }

  @ViewChild('singleStepper') s!: MatStepper;
  restart(stepper: MatStepper)
  {
    stepper.reset()
    this.StartVisible=true;
    this.smsStepperV = false;
    this.btnExVisible=false;
    this.emailStepperV = false;
    this.singleStepperV=false;
  }


}
