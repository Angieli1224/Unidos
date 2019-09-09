import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consul-sugerencia',
  templateUrl: './consul-sugerencia.component.html',
  styleUrls: ['./consul-sugerencia.component.css']
})
export class ConsulSugerenciaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mostrar() {
    
    this.router.navigate(['../usuario', '29584935']);
  }
  
}
