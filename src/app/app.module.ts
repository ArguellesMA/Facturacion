import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    EmpleadoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
