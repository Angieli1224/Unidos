import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class UsuarioService {

   readonly base = 'http://localhost:3000';

   private usuario = new BehaviorSubject(null);
   $usuario = this.usuario.asObservable();

   constructor(private http: HttpClient) { }

   getUsuario() {
      return this.http.get(this.base);
   }

   postUsuario(Usuario: any) {
      return this.http.post(`${this.base}/usuario`, Usuario);
   }

   acceso(Usuario: any) {
      return this.http.post(`${this.base}/usuario/acceso`, Usuario).subscribe(val => {
         this.usuario.next(val);
      });
   }


}
