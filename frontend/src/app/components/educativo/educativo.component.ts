import { Component, OnInit } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educativo',
  templateUrl: './educativo.component.html',
  styleUrls: ['./educativo.component.css']
})
export class EducativoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mostrar() {
    
    this.router.navigate(['../usuario', '29584935']);
  }
  mostrarSuge() {
    
    this.router.navigate(['../admon/sugenrencia']);
  }


}
