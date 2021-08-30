import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {tazaAlmacen} from "../models/tazas"

@Injectable({
  providedIn: 'root'
})
export class TazasService {

  public API_URI = `http://localhost:3000/api/query`;

  constructor(private http: HttpClient) {
  }

  getAlmacen(){
    return this.http.get(`${this.API_URI}/get`);
  }

  // getTaza(id: string){
  //   return this.http.get(`${this.API_URI}/getTaza/${id}`);
  // }

  saveTaza(objeto: tazaAlmacen){//tipo de dato models
    return this.http.post(`${this.API_URI}/create`,objeto);
  }
  // deleteTaza(id: string){
  //   return this.http.get(`${this.API_URI}/delete/${id}}`);
  // }

  // getGame(id: string){
  //   return this.http.get(`${this.API_URI}/get/${id}`);
  // }

  // updateTaza(id, updateTaza) :Observable<tazaAlmacen>{
  //   return this.http.put(`${this.API_URI}/update/${id}`,updateTaza)
  // }


}
