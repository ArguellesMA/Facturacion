import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatProgressSpinnerModule,
         MatRadioModule,
         MatSliderModule,
         MatCardModule,
         MatAutocompleteModule,
         MatCheckboxModule,
         MatSlideToggleModule,
         MatSelectModule,
         MatProgressBarModule,
         MatMenuModule,

 } from '@angular/material';


import { CatalogosRouterModule } from './Catalogos.router';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { Empleados } from './empleados/empleados.component';
import { Clientes } from './clientes/clientes.component';
import { EtiquetasPersonalizadas } from './etiquetas/etiquetas.component';
import { Impuestos } from './impuestos/impuestos.component';
import { ImpuestosLocales } from './ilocales/ilocales.component';
import { PlantillasPDF } from './mplantillas/mplantillas.component';
import { Productos } from './productos/productos.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    CatalogosRouterModule
  ],
  declarations: [
    Clientes,
    Empleados,
    EtiquetasPersonalizadas,
    Impuestos,
    ImpuestosLocales,
    PlantillasPDF,
    Productos

    ],

  exports: [
    ]
      
})
export class CatalogosModule { }