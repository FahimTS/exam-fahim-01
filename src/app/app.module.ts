import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { SummaryComponent } from './summary/summary.component';
import { TownCardComponent } from './town-card/town-card.component';
import { AccountComponent } from './page/account/account.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { MySkillComponent } from './my-skill/my-skill.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LoginFormComponent } from './page/login-form/login-form.component';
import { SingupFormComponent } from './page/singup-form/singup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesCardComponent,
    SummaryComponent,
    TownCardComponent,
    AccountComponent,
    HomeComponent,
    NavbarMenuComponent,
    MySkillComponent,
    AboutMeComponent,
    ContactMeComponent,
    LoginFormComponent,
    SingupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
