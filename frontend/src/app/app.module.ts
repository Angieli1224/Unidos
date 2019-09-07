import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EnlaceComponent } from './components/enlace/enlace.component';
import { AppRoutingModule } from './app-routing.module';
import { SugerenciaComponent } from 'src/app/components/sugerencia/sugerencia.component';

@NgModule({
   declarations: [
      AppComponent,
      UsuariosComponent,
      InicioComponent,
      EnlaceComponent,
      SugerenciaComponent

   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
