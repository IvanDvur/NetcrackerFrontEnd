import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {WorkspaceComponent} from "./components/workspace/workspace.component";
import {ContactsComponent} from "./components/workspace/contacts/contacts.component";
import {ImportComponent} from "./components/workspace/import/import.component";
import {CreateOrderComponent} from "./components/workspace/create-order/create-order.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

import {canActivate, canActivateChild} from "./auth.guardTest";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'workspace',
    component: WorkspaceComponent, canActivate: [canActivate],
    canActivateChild: [canActivateChild],
    children: [
      {path: 'import', component: ImportComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: 'create-order', component: CreateOrderComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'error', component: NotFoundComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
