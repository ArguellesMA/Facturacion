import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


const routes: Routes = [
    { path: '', component: ProductFormComponent },
    { path: 'empleado', component: EmpleadoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}