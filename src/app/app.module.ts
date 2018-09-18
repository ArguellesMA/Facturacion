import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { GCFDI33Component } from './components/g-cfdi33/g-cfdi33.component';
import { NominaComponent }  from './components/Documentos/nomina/nomina.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    EmpleadoComponent,
    LoginComponent,
    PrincipalComponent,
    GCFDI33Component,
    NominaComponent
    
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }