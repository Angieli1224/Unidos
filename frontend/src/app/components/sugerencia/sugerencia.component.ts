import { Component } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {SugerenciaService} from '../../services/sugerencia.service';


declare var M: any;

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css'],
  providers:[SugerenciaService]
 
})
export class SugerenciaComponent {

  sugerenciaForm: FormGroup;
  
 
  constructor(private sugerenciaService: SugerenciaService,private active: ActivatedRoute, private router:Router) {

    this.sugerenciaForm = new FormGroup({
       nombre: new FormControl(null, Validators.required),
       id_usuario: new FormControl(null, Validators.required),
       telefono: new FormControl(null, Validators.required),
       id_enlace: new FormControl(null),
       asunto: new FormControl(null, Validators.required),
       descripcion: new FormControl(null, Validators.required)
    });


   

  };

  ngOnInit() {


    this.iniciomodal();
 }

iniciomodal() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});

}

modal() {
  var elem = document.querySelectorAll('.modal');
  var instance = M.Modal.getInstance(elem);
  instance.open();
}

  addSugerencia(form: NgForm) {
    this.active.params.subscribe(val => {
      this.sugerenciaForm.controls['id_usuario'].setValue(val.id_usuario);
      console.log("Este es el id que envia" + val.id_usuario);
      console.log("Este es el id otro que si " + this.sugerenciaForm.get('id_usuario').value);      
      
   });
    this.sugerenciaService.postSugerencia(this.sugerenciaForm.value)
       .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Guardado con Éxito' });
          
       });
      
      };

    

  resetForm(form?: NgForm) {
    if (form) {
       form.reset();
       M.toast({ html: 'Enviado con Éxito' })
       console.log("limpie")
       
  
    }
  };

  

 
}

    
   
   
 
  

