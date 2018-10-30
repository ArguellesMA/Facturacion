import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Clientes } from './clientes/clientes.component';
import { Empleados } from './empleados/empleados.component';
import { EtiquetasPersonalizadas } from './etiquetas/etiquetas.component';
import { Impuestos } from './impuestos/impuestos.component';
import { ImpuestosLocales } from './ilocales/ilocales.component';
import { PlantillasPDF } from './mplantillas/mplantillas.component';
import { Productos } from './productos/productos.component';




const CatalogosRoutes: Routes = [
  	{ path: 'clientes', component:  Clientes , data: { animation: 'clientes' }},
    { path: 'empleados', component:  Empleados , data: { animation: 'empleados' }},
    { path: 'etiquetas', component: EtiquetasPersonalizadas ,data: { animation: 'etiquetas' } },
    { path: 'impuestos', component: Impuestos , data: { animation: 'impuestos' }},
    { path: 'ilocales', component: ImpuestosLocales ,data: { animation: 'ilocales' } },
    { path: 'mplantillas', component: PlantillasPDF ,data: { animation: 'mplantillas' } },
    { path: 'productos', component: Productos , data: { animation: 'productos' }},
    


    

    { path: '', redirectTo: '/buttons', pathMatch: 'full',}
];

@NgModule({
  imports: [
    RouterModule.forChild(CatalogosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogosRouterModule {}