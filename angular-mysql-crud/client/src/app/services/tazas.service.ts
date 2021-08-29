import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {almacen} from '../models/tazas'
@Injectable({
  providedIn: 'root'
})
export class TazasService {

  API_URI = 'http://localhost:3000/api/query'
  constructor(private http:HttpClient ) {}

  
  getTazas() {
    return this.http.get(`${this.API_URI}/get`)
  }
  getTazasBG(id: string){
    return this.http.get(`${this.API_URI}/get${id}`)
  }

  saveTaza(taza: almacen){
    return this.http.post(`${this.API_URI}/createPedido`, taza)
  }

  deleteTaza(id: string){
    return this.http.delete(`${this.API_URI}/taza/${id}`);
  }
}
