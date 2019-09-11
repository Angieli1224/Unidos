import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { EnlaceComponent } from './components/enlace/enlace.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SugerenciaComponent } from 'src/app/components/sugerencia/sugerencia.component';
import { AdmonComponent } from './components/admon/admon.component';
import {ConsulSugerenciaComponent} from './components/consul-sugerencia/consul-sugerencia.component';
import {EducativoComponent} from './components/educativo/educativo.component';

const routes: Routes = [

   { path: "", redirectTo: "inicio", pathMatch: "prefix" },
   { path: "inicio", component: InicioComponent },
   { path: "usuario/:id_enlace", component: UsuariosComponent },
   { path: "enlace", component: EnlaceComponent },
   { path: "sugerencias/crear/:id_usuario", component: SugerenciaComponent },
   { path: "admon", component: AdmonComponent},
   { path: "admon/sugerencias", component: ConsulSugerenciaComponent},
   { path: "admon/educativo", component: EducativoComponent}

]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
