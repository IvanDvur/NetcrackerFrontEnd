import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private dialogRef: MatDialogRef<RegistrationComponent>) {}
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
