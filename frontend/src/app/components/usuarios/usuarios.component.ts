import { Component, OnInit, HostListener } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ciudad } from './data';
import { Logs } from 'selenium-webdriver';

declare var M: any;

@Component({
   selector: 'app-usuarios',
   templateUrl: './usuarios.component.html',
   styleUrls: ['./usuarios.component.css'],
   providers: [UsuarioService]
})

export class UsuariosComponent implements OnInit {

   private usuarios: any[];
   usuarioForm: FormGroup;

   id: any;

   ciudades = ciudad;

   existeUsuario: boolean;
   spanNombre: string = '';

   @HostListener('focus', ['$event'])
   OnLeave(e) {
      console.log(e);
   }


   constructor(private usuarioService: UsuarioService, private active: ActivatedRoute, private router: Router) {

      this.existeUsuario = false;
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

      this.usuarioForm.controls['identificacion'].valueChanges.subscribe(val => {
         this.existeUsuario = false;
         let existe = this.usuarios.filter((v) => v.identificacion === val);
         console.log(existe);

         if (existe.length > 0) {
            console.log('funciona XD');
            this.existeUsuario = true;
            M.toast({ html: 'El usario ya existe' });

         }

      });




      usuarioService.$usuarioTodos.subscribe(val => {
         if (val) {
            this.usuarios = val;
         }
      });




   }

   ngOnInit() {


      this.iniciomodal();


      this.inicioselect();



      this.active.params.subscribe(val => {
         this.usuarioForm.controls['id_enlace'].setValue(val.id_enlace);
         this.id = val.id_enlace;

      })
   }

   iniciomodal() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});

   }


   inicioselect() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
   }

   validarusuario(flag: boolean) {
      if (this.usuarioForm.valid) {
         if (flag) {
            this.addUsuario(this.usuarioForm.value);
            
            
      if (this.usuarioForm.get('id_enlace').value == '1130584672') {
         this.router.navigate(['../admon']);

      }else{
         this.inicio();
      }
         } else {
            this.addUsuario(this.usuarioForm.value);
            this.resetForm(this.usuarioForm.value);
         }


      } else {
         M.toast({ html: 'Faltan campos por diligenciar' });

      }

   }

   addUsuario(form?: NgForm) {

      var ciudad = document.getElementById('ciudad') as HTMLInputElement;
      this.usuarioForm.controls['ciudad'].setValue(ciudad.value);
      var comuna = document.getElementById('comuna') as HTMLInputElement;
      this.usuarioForm.controls['comuna'].setValue(comuna.value);
      var mesa_votacion = document.getElementById('mesa_votacion') as HTMLInputElement;
      this.usuarioForm.controls['mesa_votacion'].setValue(mesa_votacion.value);
      var nivel_escolaridad = document.getElementById('nivel_escolaridad') as HTMLInputElement;
      this.usuarioForm.controls['nivel_escolaridad'].setValue(nivel_escolaridad.value);
      var perfil_ocupacional = document.getElementById('perfil_ocupacional') as HTMLInputElement;
      this.usuarioForm.controls['perfil_ocupacional'].setValue(perfil_ocupacional.value);
      var trabaja = document.getElementById('trabaja') as HTMLInputElement;
      this.usuarioForm.controls['trabaja'].setValue(trabaja.value);
      var personas_cargo = document.getElementById('personas_cargo') as HTMLInputElement;
      this.usuarioForm.controls['personas_cargo'].setValue(personas_cargo.value);



      this.usuarioService.postUsuario(this.usuarioForm.value)
         .subscribe(res => {
            this.resetForm(form);
            this.inicioselect();
            M.toast({ html: 'Guardado con Éxito' });

         });




   }

   resetForm(form?: NgForm) {
      if (form) {
         form.reset();
         this.inicioselect();
      }
   }

   inicio() {
      if (this.id == 1130584672) {
         this.router.navigate(['../admon']);
      } else {
         this.router.navigate(['../../inicio']);
      }
   }





}
