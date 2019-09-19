import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {SugerenciaService} from '../../services/sugerencia.service';
import { Sugerencia } from 'src/app/models/sugerencia';

declare var M: any;

@Component({
  selector: 'app-consul-sugerencia',
  templateUrl: './consul-sugerencia.component.html',
  styleUrls: ['./consul-sugerencia.component.css']
})
export class ConsulSugerenciaComponent implements OnInit {

  suge = new Sugerencia();

  constructor(private active: ActivatedRoute, private sugerenciaService: SugerenciaService,private router: Router) { }


  ngOnInit() {

   this.obtenerSugerencias();
   this.iniciomodal();

  }

  selectsuge(sugerencia:Sugerencia){
    this.suge = sugerencia;
  }
  
  mostrar() {
    
    this.router.navigate(['../usuario', '1130584672']);
  }

  
  obtenerSugerencias(){
    this.sugerenciaService.getSugerencias().subscribe(res =>{
    
    
      this.sugerenciaService.sugerencias= res as Sugerencia[];
      console.log( res);
      
   
    }); 
  };

  eliminarSugerencias(){
    this.sugerenciaService.DeleteSugerencias(this.suge).subscribe(res =>{
      this.obtenerSugerencias();  
       
    }); 
  };
 
  iniciomodal() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

 };
  
}
