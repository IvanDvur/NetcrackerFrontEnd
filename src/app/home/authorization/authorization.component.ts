import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  constructor(private dialogRef: MatDialogRef<AuthorizationComponent>) {}
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
