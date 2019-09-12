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

   private usuario = new BehaviorSubject(null);
   $usuario = this.usuario.asObservable();

   constructor(private http: HttpClient) {   }

   getUsuario() {
      return this.http.get(this.base);
   }

   getPerfil(){
      return this.http.get(`${this.base}/usuario/perfil`);
    }

   postUsuario(Usuario: any) {
      return this.http.post(`${this.base}/usuario`, Usuario);
   }

   acceso(Usuario: any) {
      
      return this.http.post(`${this.base}/usuario/acceso`, Usuario).subscribe(val => {
         this.usuario.next(val);
   
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
