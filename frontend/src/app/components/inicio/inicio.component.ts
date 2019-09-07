import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
   selector: 'app-inicio',
   templateUrl: './inicio.component.html',
   styleUrls: ['./inicio.component.css']

})
export class InicioComponent {

   loginForm: FormGroup;

   constructor(private sUsuario: UsuarioService, private router: Router) {

      this.loginForm = new FormGroup({
         identificacion: new FormControl(null, Validators.required),
         contrasena: new FormControl(null, Validators.required)
      });

      sUsuario.$usuario.subscribe(val => {
         if (val) {
            // para admin
            if (val['identificacion'] == '1114729379') {
               router.navigate(['']); // cambiar rutas
            } else {
               router.navigate(['../sugerencias/crear']);
            }
         }
      });

   }

   acceder() {
      this.sUsuario.acceso(this.loginForm.value);
   }

}
