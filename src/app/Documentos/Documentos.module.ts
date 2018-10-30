import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DocumentosRouterModule } from './Documentos.router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { GenerarNomina } from './gnomina12/gnomina12.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { ComplementoPagos } from './gpagos/gpagos.component';
import { ComercioExterior } from './gcomercio/gcomercio.component'; 
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { GenerarRetenciones } from './gretenciones/gretenciones.component';
import { GenerarCFDI } from './gcfdi33/gcfdi33.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    Ng2OdometerModule,
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    DocumentosRouterModule
  ],
  declarations: [ 
      GenerarNomina,
      ComplementoPagos,
      ComercioExterior,
      GenerarRetenciones,
      GenerarCFDI
    
      ],
  exports: [  
      GenerarNomina,
      ComplementoPagos,
      ComercioExterior,
      GenerarRetenciones,
      GenerarCFDI
  ]
})
export class DocumentosModule { }
