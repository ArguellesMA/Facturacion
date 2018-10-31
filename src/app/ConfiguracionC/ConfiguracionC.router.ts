import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Certificado } from './certificado/certificado.component';
import { ActivacionCreditos } from './creditoscfdi/creditoscfdi.component';
import { SucursalesCuentas } from './sucuentas/sucuentas.component';
import { InformacionFiscal } from './ifiscal/ifiscal.component';
import { CreditosRecepcion } from './creditosrecepcion/creditosrecepcion.component';
import { Logos } from './logos/logos.component';
import { ActivacionComplementos } from './complementos/complementos.component';
import { MisPagos } from './pagos/pagos.component';
import { Correo } from './correo/correo.component';
import { CartaManifiesto } from './cartaman/cartaman.component';
import { ConfiguracionGeneral } from './configuraciongral/configuraciongral.component';

const ConfiguracionCRoutes: Routes = [
    { path: 'ifiscal', component: InformacionFiscal ,data: { animation: 'ifiscal' }},
  	{ path: 'sucuentas', component: SucursalesCuentas ,data: { animation: 'sucuentas' }},
  	{ path: 'certificado', component: Certificado ,data: { animation: 'certificado' } },
    { path: 'creditoscfdi', component: ActivacionCreditos ,data: { animation: 'creditoscfdi' }},
    { path: 'creditosrecepcion', component: CreditosRecepcion ,data: { animation: 'creditosrecepcion'}},
    { path: 'logos', component: Logos ,data: { animation: 'logos'}},
    { path: 'complementos', component: ActivacionComplementos ,data: { animation: 'complementos'}},
    { path: 'pagos', component: MisPagos ,data: { animation: 'pagos' }},
    { path: 'correo', component: Correo ,data: { animation: 'correo' }},
    { path: 'cartaman', component: CartaManifiesto ,data: { animation: 'cartaman'}},
    { path: 'configuraciongral', component: ConfiguracionGeneral ,data: { animation: 'configuraciongral' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(ConfiguracionCRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class ConfiguracionCRouterModule {}