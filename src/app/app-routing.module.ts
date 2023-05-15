import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginFormComponent } from './page/login-form/login-form.component';
import { SingupFormComponent } from './page/singup-form/singup-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login-form', component: LoginFormComponent},
  {path: 'singup-form', component: SingupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
