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
import { RCFDI33Component } from './components/Registros/RCFDI33/Rcfdi33.component';
import { ComercioComponent } from './components/Documentos/comercio/comercio.component';
import { PagosComponent } from './components/Documentos/pagos/pagos.component';
import { DRetencionesComponent } from './components/Documentos/DRetenciones/DRetenciones.component';
import { RRetencionesComponent } from './components/Registros/Rretenciones/Rretenciones.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    EmpleadoComponent,
    LoginComponent,
    PrincipalComponent,
    GCFDI33Component,
    NominaComponent,
    RCFDI33Component,
    ComercioComponent,
    PagosComponent,
    DRetencionesComponent,
    RRetencionesComponent
    
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