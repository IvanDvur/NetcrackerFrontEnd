import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorkspaceComponent} from './components/workspace/workspace.component';
import {HomeComponent} from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MailingListComponent} from "./components/workspace/contacts/mailing-list.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
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
import {ToastModule} from "primeng/toast";
import {SafeHtmlPipe} from "./components/workspace/create-order/safe-html.pipe";
import {OverlayPanelModule} from "primeng/overlaypanel";
import { ImportWindowComponent } from './components/workspace/import-window/import-window.component';
import { ContactComponent } from './components/workspace/contact/contact.component';
import {RadioButtonModule} from "primeng/radiobutton";
import {RatingModule} from "primeng/rating";
import {ToolbarModule} from "primeng/toolbar";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import { StatusPerClientComponent } from './components/workspace/status-per-client/status-per-client.component';
import {TranslateModule} from "@ngx-translate/core";
import { CustomEmailEditorComponent } from './components/workspace/email-editor/email-editor.component';
import { UserTemplatesComponent } from './components/workspace/user-templates/user-templates.component';
import {CardModule} from "primeng/card";
import { BillingComponent } from './components/workspace/billing/billing.component';



@NgModule({
  declarations: [
    WorkspaceComponent,
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ImportComponent,
    CreateOrderComponent,
    MailingListComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    NotFoundComponent,
    ActiveOrdersComponent,
    SafeHtmlPipe,
    ImportWindowComponent,
    ContactComponent,
    StatusPerClientComponent,
    CustomEmailEditorComponent,
    UserTemplatesComponent,
    BillingComponent,
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
        ToastModule,
        OverlayPanelModule,
        RadioButtonModule,
        RatingModule,
        ToolbarModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        TranslateModule,
        CardModule,
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

export class AppModule {

}
