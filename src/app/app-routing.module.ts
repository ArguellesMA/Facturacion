import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { GCFDI33Component } from './components/Documentos/g-cfdi33/g-cfdi33.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NominaComponent }    from './components/Documentos/nomina/nomina.component';
import { RCFDI33Component } from './components/Registros/RCFDI33/Rcfdi33.component';
import { ComercioComponent } from './components/Documentos/comercio/comercio.component';
import { PagosComponent } from './components/Documentos/pagos/pagos.component';
import { DRetencionesComponent}from './components/Documentos/DRetenciones/DRetenciones.component';
import { RRetencionesComponent} from './components/Registros/Rretenciones/Rretenciones.component';


const routes: Routes = [
    { path: '', component:LoginComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'producto', component: ProductFormComponent },
    { path: 'empleado', component: EmpleadoComponent },
    { path: 'nomina', component: NominaComponent },
    { path: 'Rcfdi33', component: RCFDI33Component },
    { path: 'comercio', component: ComercioComponent},
    { path: 'pagos', component: PagosComponent },
    { path: 'DRetenciones', component: DRetencionesComponent},
    { path: 'Rretenciones', component: RRetencionesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})

export class AppRoutingModule {}