import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {ContactsComponent} from "./workspace/contacts/contacts.component";
import {ImportComponent} from "./workspace/import/import.component";
import {CreateOrderComponent} from "./workspace/create-order/create-order.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'workspace',
    component: WorkspaceComponent,
    children: [
      { path: 'import', component: ImportComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'create-order', component: CreateOrderComponent},

    ]
  },
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
