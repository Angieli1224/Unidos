import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ciudad } from './data';

declare var M: any;

@Component({
   selector: 'app-usuarios',
   templateUrl: './usuarios.component.html',
   styleUrls: ['./usuarios.component.css'],
   providers: [UsuarioService]
})

export class UsuariosComponent {

   usuarioForm: FormGroup;
   
   constructor(private usuarioService: UsuarioService, private active: ActivatedRoute) {
    
      
      this.usuarioForm = new FormGroup({
         nombre: new FormControl(null, Validators.required),
         apellido: new FormControl(null, Validators.required),
         identificacion: new FormControl(null, Validators.required),
         contrasena: new FormControl(null, Validators.required),
         id_enlace: new FormControl(null, Validators.required),
         telefono: new FormControl(null, Validators.required),
         direccion: new FormControl(null, Validators.required),
         ciudad: new FormControl(null, Validators.required),
         comuna: new FormControl(null, Validators.required),
         puesto_votacion: new FormControl(null, Validators.required),
         mesa_votacion: new FormControl(null, Validators.required),
         nivel_escolaridad: new FormControl(null, Validators.required),
         perfil_ocupacional: new FormControl(null, Validators.required),
         trabaja: new FormControl(null, Validators.required),
         personas_cargo: new FormControl(null, Validators.required)
      });

      
      this.active.params.subscribe(val => {
         this.usuarioForm.controls['id_enlace'].setValue(val.id_enlace);
      })

      
   }

   addUsuario(form: NgForm) {
      this.usuarioService.postUsuario(this.usuarioForm.value)
         .subscribe(res => {
            this.resetForm(form);
            M.toast({ html: 'Guardado con Éxito' });
            
         });
   }

   resetForm(form?: NgForm) {
      if (form) {
         form.reset();
      }
   }



}
