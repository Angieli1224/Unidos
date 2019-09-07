import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
   providedIn: 'root'
})
export class EnlaceService {

   readonly URL_REGISTRO = 'http://localhost:3000';
   constructor(private http: HttpClient) {
      this.http.get(`${this.URL_REGISTRO}/usuario/enlaces`).subscribe(valor => {
         this.enlaces.next(valor);
      }, error => {
         console.log(error);
      });
   }

   private enlaces = new BehaviorSubject(null);
   $enlaces = this.enlaces.asObservable();

}
