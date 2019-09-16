import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Enlace } from '../models/enlace'
import {Usuario} from '../models/usuario';

@Injectable({
   providedIn: 'root'
})
export class UsuarioService {

   usuarios : Usuario [];

   readonly base = 'http://localhost:3000';

   private cantidad =new BehaviorSubject(null);
   $cantidad = this.cantidad.asObservable();

   usuario = new BehaviorSubject(null);
   $usuario = this.usuario.asObservable();

   private usuarioTodos = new BehaviorSubject(null);
   $usuarioTodos = this.usuarioTodos.asObservable();

   constructor(private http: HttpClient) { 
      this.http.get(`${this.base}/usuario`).subscribe(valor => {
         this.usuarioTodos.next(valor);
      }, error => {
         console.log(error);
      });
     }

   getUsuario() {
      return this.http.get(this.base);
   }

   getPerfil(consulta: any){
      return this.http.post(`${this.base}/usuario/perfil`, consulta);
    }

   postUsuario(Usuario: any) {
      return this.http.post(`${this.base}/usuario`, Usuario);
   }

   acceso(Usuario: any) {
      
     this.http.post(`${this.base}/usuario/acceso`, Usuario).subscribe(val => {
         this.usuario.next(val);
         console.log("retuns val "+val);
         
         
      });
   }
  


   cantpersonas(){

         return this.http.get(`${this.base}/usuario/cantidad`);
 
   }

   cantXenlace(id_enlace: any){
      var enlace = new Enlace;
      enlace.id_enlace = id_enlace
      return this.http.post(`${this.base}/usuario/cantidad/enlace`, enlace);
             
      
   }


}
