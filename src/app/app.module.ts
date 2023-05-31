import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorkspaceComponent} from './components/workspace/workspace.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {ImportComponent} from './components/workspace/import/import.component';
import {CreateOrderComponent} from './components/workspace/create-order/create-order.component';
import {ContactsComponent} from "./components/workspace/contacts/contacts.component";
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FileUploadModule} from "primeng/fileupload";
import {LoginComponent} from './components/login/login.component';
import {httpIterseptorProviders} from "./services/auth/auth-interseptor";
import {HeaderComponent} from './components/header/header.component';
import {CommonModule} from "@angular/common";
import {RegistrationComponent} from "./components/registration/registration.component";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from "@angular/material/radio";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {SliderModule} from "primeng/slider";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, GoogleSigninButtonModule}
  from '@abacritt/angularx-social-login';
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {EmailEditorModule} from "../../projects/email-editor/src/lib/email-editor.module";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {TabViewModule} from "primeng/tabview";
import { ActiveOrdersComponent } from './components/workspace/active-orders/active-orders.component';


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
    NotFoundComponent,
    ActiveOrdersComponent,
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
        MatStepperModule,
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
        CommonModule,
        MatRadioModule,
        TableModule,
        TagModule,
        DropdownModule,
        MultiSelectModule,
        SliderModule,
        InputTextModule,
        RippleModule,
        EmailEditorModule,
        StyleClassModule,
        SocialLoginModule,
        GoogleSigninButtonModule,
        CalendarModule,
        DialogModule,
        MatTabsModule,
        MatOptionModule,
        MatSelectModule,
        TabViewModule,
    ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('427449141788-volpt3j75dicq8kpajve17vbe1aqqnb0.apps.googleusercontent.com', {oneTapEnabled: false}),
        },
      ],
    } as SocialAuthServiceConfig,
  }
    , httpIterseptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule {}
