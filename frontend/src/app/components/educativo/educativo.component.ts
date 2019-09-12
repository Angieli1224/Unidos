import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from 'src/app/models/usuario';

@Component({
  selector: 'app-educativo',
  templateUrl: './educativo.component.html',
  styleUrls: ['./educativo.component.css'],
  providers: [UsuarioService]
})
export class EducativoComponent implements OnInit {

  constructor(private active: ActivatedRoute, private usuarioService: UsuarioService ,private router: Router) { }

  ngOnInit() {
    this.obtenerPerfil();
  }

  mostrar() {
    
    this.router.navigate(['../usuario', '29584935']);
  }
  mostrarSuge() {
    
    this.router.navigate(['../admon/sugenrencia']);
  }

  obtenerPerfil(){
    this.usuarioService.getPerfil().subscribe(res =>{
    
    
      this.usuarioService.usuarios= res as Usuario[];
      console.log( res);
      
   
    }); 
  };


}
