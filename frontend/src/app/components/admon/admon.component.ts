import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../services/usuario.service'

declare var M: any;

@Component({
  selector: 'app-admon',
  templateUrl: './admon.component.html',
  styleUrls: ['./admon.component.css'],
  providers:[UsuarioService]
 
})
export class AdmonComponent implements OnInit {


  cantidadUsuarios:any;
  private usuariosXenlace : any;


  
  constructor(private active: ActivatedRoute, private usuariosService: UsuarioService ,private router: Router) { 
   this.usuariosXenlace = 0;
  }

  ngOnInit() {

  this.consultarUsuarios();
  }

  mostrar() {
    
    this.router.navigate(['../usuario', '29584935']);
  }
  mostrarSuge() {
    
    this.router.navigate(['../admon/sugenrencia']);
  }

  consultarEnlace(){

    var input = document.getElementById('enlace') as HTMLInputElement;
   
    if(!input.value){
      M.toast({ html: 'Ingrese el numero de cédula' })
      }
      else {
    this.usuariosService.cantXenlace(input.value).subscribe(val => {
      this.usuariosXenlace=val;
    });
  }
  }

  consultarUsuarios(){

    this.usuariosService.cantpersonas().subscribe(res =>{
      this.cantidadUsuarios=res;
    });
  }

  

}

