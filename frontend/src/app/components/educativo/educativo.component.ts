import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from 'src/app/models/usuario';




declare var M:any;

@Component({
  selector: 'app-educativo',
  templateUrl: './educativo.component.html',
  styleUrls: ['./educativo.component.css'],
  providers: [UsuarioService]
})
export class EducativoComponent implements OnInit {

  consultaForm: FormGroup;

  constructor(private active: ActivatedRoute, private usuarioService: UsuarioService ,private router: Router) { 

    this.consultaForm = new FormGroup({
      nivel_escolaridad: new FormControl(null, Validators.required),
      perfil_ocupacional: new FormControl(null, Validators.required)
    });

    
  }

  ngOnInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    this.consultaForm.controls['nivel_escolaridad'].setValue("ninguno");
    this.consultaForm.controls['perfil_ocupacional'].setValue("ninguno");
  }

  mostrar() {
    
    this.router.navigate(['../usuario', '1130584672']);
  }
  mostrarSuge() {
    
    this.router.navigate(['../admon/sugenrencia']);
  }

  obtenerPerfil(){
    

    this.usuarioService.getPerfil(this.consultaForm.value).subscribe(res =>{    
      this.usuarioService.usuarios= res as Usuario[];

    }); 
  };


}
