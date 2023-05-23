import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { HomeComponent } from './components/home/home.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {SidebarComponent} from './components/workspace/sidebar/sidebar.component';

import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {SlideMenuModule} from "primeng/slidemenu";
import {MenuModule} from "primeng/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {PanelMenuModule} from "primeng/panelmenu";
import { ImportComponent } from './components/workspace/import/import.component';
import { CreateOrderComponent } from './components/workspace/create-order/create-order.component';
import {ContactsComponent} from "./components/workspace/contacts/contacts.component";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FileUploadModule} from "primeng/fileupload";
import { LoginComponent } from './components/login/login.component';
import {httpIterseptorProviders} from "./services/auth/auth-interseptor";
import { HeaderComponent } from './components/header/header.component';
import {CommonModule} from "@angular/common";
import {RegistrationComponent} from "./components/registration/registration.component";
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ImportComponent,
    CreateOrderComponent,
    ContactsComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    NotFoundComponent
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
    FileUploadModule,
    CommonModule
  ],
  providers: [httpIterseptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
