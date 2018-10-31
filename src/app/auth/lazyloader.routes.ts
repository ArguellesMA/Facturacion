import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'Documentos', loadChildren: '../Documentos/Documentos.module#DocumentosModule'},
        { path: 'Catalogos', loadChildren: '../Catalogos/Catalogos.module#CatalogosModule' },
        { path: 'Herramientas', loadChildren: '../Herramientas/Herramientas.module#HerramientasModule' },
        { path: 'Registro', loadChildren: '../Registro/Registro.module#RegistroModule' },

        { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
        { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
        //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
        { path: 'ConfiguracionC', loadChildren: '../ConfiguracionC/ConfiguracionC.module#ConfiguracionCModule' },
        { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, //fix this
        // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
        { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
    ]
}];
