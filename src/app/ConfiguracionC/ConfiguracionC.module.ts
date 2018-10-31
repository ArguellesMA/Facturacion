import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ConfiguracionCRouterModule } from './ConfiguracionC.router';

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

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
         MatSortModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatChipsModule,
         MatButtonToggleModule } from '@angular/material';


import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { InformacionFiscal } from './ifiscal/ifiscal.component';
import { SucursalesCuentas } from './sucuentas/sucuentas.component';
import { Certificado } from './certificado/certificado.component';
import { ActivacionCreditos } from './creditoscfdi/creditoscfdi.component';
import { CreditosRecepcion } from './creditosrecepcion/creditosrecepcion.component';
import { Logos } from './logos/logos.component';
import { ActivacionComplementos } from './complementos/complementos.component';
import { MisPagos } from './pagos/pagos.component';
import { CartaManifiesto } from './cartaman/cartaman.component'; 
import { ConfiguracionGeneral } from './configuraciongral/configuraciongral.component';
import { Correo } from './correo/correo.component';


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }),
    ConfiguracionCRouterModule
  ],
  declarations: [
   InformacionFiscal,
   SucursalesCuentas,
   Certificado,
   ActivacionCreditos,
   CreditosRecepcion,
   Logos,
   ActivacionComplementos,
   MisPagos,
   CartaManifiesto,
   ConfiguracionGeneral,
   Correo,
  ],

  exports: [
    ]
      
})
export class ConfiguracionCModule { }


