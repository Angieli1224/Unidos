import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Sugerencia} from '../models/sugerencia';
import {SugerenciaComponent} from '../components/sugerencia/sugerencia.component';


@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  sugerencias : Sugerencia [];

  readonly base = 'http://localhost:3000';

  private sugerencia = new BehaviorSubject(null);
  $sugerencia = this.sugerencia.asObservable();
  
  constructor(private http: HttpClient) {}
  
  getSugerencias(){
    return this.http.get(`${this.base}/sugerencia`);
  }

  postSugerencia(Sugerencia: any) {
    return this.http.post(`${this.base}/sugerencia`, Sugerencia);
 }
  
}
