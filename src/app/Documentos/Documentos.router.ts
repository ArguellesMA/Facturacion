import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarCFDI } from './gcfdi33/gcfdi33.component';
import { ComercioExterior } from './gcomercio/gcomercio.component';
import { GenerarNomina } from './gnomina12/gnomina12.component';
import { ComplementoPagos } from './gpagos/gpagos.component';
import { GenerarRetenciones } from './gretenciones/gretenciones.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'gcfdi33', component: GenerarCFDI , data: { animation: 'gcfdi33' }},
  	{ path: 'gcomercio', component: ComercioExterior ,data: { animation: 'gcomercio' }},
    { path: 'gnomina12', component: GenerarNomina ,data: { animation: 'gnomina12' }},
    { path: 'gpagos',  component:  ComplementoPagos ,data: { animation: 'gpagos' }},
    { path: 'gretenciones', component: GenerarRetenciones ,data: { animation: 'gretenciones'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class DocumentosRouterModule {}