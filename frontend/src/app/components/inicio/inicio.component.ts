import { Component } from '@angular/core';
import { from } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
   selector: 'app-inicio',
   templateUrl: './inicio.component.html',
   styleUrls: ['./inicio.component.css']

})
export class InicioComponent {

   loginForm: FormGroup;

   constructor(private active: ActivatedRoute, private sUsuario: UsuarioService, private router: Router) {

      this.loginForm = new FormGroup({
         identificacion: new FormControl(null, Validators.required),
         contrasena: new FormControl(null, Validators.required)
      });

      

   }

   acceder() {
      this.sUsuario.acceso(this.loginForm.value);
      this.sUsuario.$usuario.subscribe(val => {
         if (val) {
            // para admin
            if (val['identificacion'] == '1130584672' && val['contrasena'] == 'edilcali') {
               this.router.navigate(['../admon']); // cambiar rutas
            } else {
               console.log(this.loginForm.get('identificacion').value);
               
               this.router.navigate(['../sugerencias/crear',this.loginForm.get('identificacion').value]);
            }
         }
      });
      
      
      
   }

  

}
