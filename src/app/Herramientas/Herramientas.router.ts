import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridgeTXT } from './bridge33/bridge33.component';
import { BridgeT32 } from './bridge32/bridge32.component';
import { Buzon } from './buzon/buzon.component';
import { Prefacturas } from './prefacturas/prefacturas.component';
import { PreNomina } from './prenomina/prenomina.component';
import { PreNomina32 } from './prenomina32/prenomina32.component';
import { Tickets } from './tickets/tickets.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'bridge33', component: BridgeTXT , data: { animation: 'bridge33' }},
  	{ path: 'bridge32', component: BridgeT32 ,data: { animation: 'bridge32' }},
    { path: 'buzon', component: Buzon ,data: { animation: 'buzon' }},
    { path: 'prefacturas',  component:  Prefacturas ,data: { animation: 'prefacturas' }},
    { path: 'prenomina', component: PreNomina ,data: { animation: 'prenomina'}},
    { path: 'prenomina32', component: PreNomina32 ,data: { animation: 'prenomina32'}},
    { path: 'tickets', component: Tickets ,data: { animation: 'tickets'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class HerramientasRouterModule {}