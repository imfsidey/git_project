import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {CryptoService} from './crypto.service'
import{EmployeeService}from './employee.service'
import {HttpClientModule} from '@angular/common/http';
import { EmpdetailsComponent } from './empdetails/empdetails.component'
const appRoutes :Routes =[
  {path:'' , component:AppComponent},

{path:'dashboard' , component:DashboardComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmpdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [CryptoService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
