import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {

  servidor= "http://127.0.0.1:3016/notas";

  constructor(private servicio:HttpClient ) { }

  Consultar():Observable<any>{
    return this.servicio.get(`${this.servidor}`);
    }
 }

