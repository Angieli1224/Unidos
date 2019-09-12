import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {SugerenciaService} from '../../services/sugerencia.service';
import { Sugerencia } from 'src/app/models/sugerencia';

@Component({
  selector: 'app-consul-sugerencia',
  templateUrl: './consul-sugerencia.component.html',
  styleUrls: ['./consul-sugerencia.component.css']
})
export class ConsulSugerenciaComponent implements OnInit {

  
  constructor(private active: ActivatedRoute, private sugerenciaService: SugerenciaService,private router: Router) { }

  ngOnInit() {

   this.obtenerSugerencias();

  }

  
  obtenerSugerencias(){
    this.sugerenciaService.getSugerencias().subscribe(res =>{
    
    
      this.sugerenciaService.sugerencias= res as Sugerencia[];
      console.log( res);
      
   
    }); 
  };
 
  
}
