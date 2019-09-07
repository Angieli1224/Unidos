import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

declare var M: any;

@Component({

  
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent {

  sugerenciaForm: FormGroup;
  router: any;

  constructor() {

    this.sugerenciaForm = new FormGroup({
       asunto: new FormControl(null, Validators.required),
       descripcion: new FormControl(null, Validators.required)
    });
  };
    

  resetForm(form?: NgForm) {
    if (form) {
       form.reset();
       M.toast({ html: 'Enviado con Éxito' })
       console.log("limpie")
       
  
    }
   
 }
  


}
