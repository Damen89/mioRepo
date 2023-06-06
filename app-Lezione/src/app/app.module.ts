import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    HomeComponent,
    UtentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule per approccio Template Driven
    FormsModule,
    //ReactiveFormsModule per approccio Reactive
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
