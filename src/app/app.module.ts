import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { AuthorizationComponent } from './home/authorization/authorization.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {SidebarComponent} from './workspace/sidebar/sidebar.component';

import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SlideMenuModule} from "primeng/slidemenu";
import {MenuModule} from "primeng/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {PanelMenuModule} from "primeng/panelmenu";
import { ImportComponent } from './workspace/import/import.component';
import { CreateOrderComponent } from './workspace/create-order/create-order.component';
import {ContactsComponent} from "./workspace/contacts/contacts.component";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    WorkspaceComponent,
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    AuthorizationComponent,
    SidebarComponent,
    ImportComponent,
    CreateOrderComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    SidebarModule,
    ButtonModule,
    SlideMenuModule,
    MenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    PanelMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
