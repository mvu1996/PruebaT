import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {} from "../services/"

@Injectable({
  providedIn: 'root'
})
export class TazasService {

  public API_URI = `http://localhost:3000/apis/query`;
  constructor(private http: HttpClient) {
  }

  getAlmacen(){
    return this.http.get(`${this.API_URI}/get}`);
  }

  saveTaza(tazaAlmacen: tazas){//tipo de dato models
    return this.http.get(`${this.API_URI}/create}`);
  }
  // deleteTaza(){
  //   return this.http.get(`${this.API_URI}/delete}`);
  // }

  // getGame(id: string){
  //   return this.http.get(`${this.API_URI}/get/${id}`);
  // }


}
