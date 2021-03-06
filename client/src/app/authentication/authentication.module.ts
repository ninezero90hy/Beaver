import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginViewComponent} from './view/login-view.component';
import {RegisterViewComponent} from './view/register-view.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderModule} from '../common/header/header.module';
import {FooterModule} from './component/footer/footer.module';
import {AuthenticationComponent} from './authentication.component';

const routes: Routes = [
  {path: '', component: AuthenticationComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'register', component: RegisterViewComponent},
      {path: 'login', component: LoginViewComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthenticationComponent,
    LoginViewComponent,
    RegisterViewComponent
  ],
  providers: [],

})
export class AuthenticationModule { }
