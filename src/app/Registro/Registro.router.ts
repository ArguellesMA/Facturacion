import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CFDI33 } from './cfdi33/cfdi33.component';
import { Retenciones } from './retenciones/retenciones.component';

const RegistroRoutes: Routes = [
  	{ path: 'cfdi33', component: CFDI33 , data: { animation: 'cfdi33' }},
  	{ path: 'retenciones', component: Retenciones ,data: { animation: 'retenciones' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(RegistroRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class RegistroRouterModule {}