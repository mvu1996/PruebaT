import { Component, OnInit } from '@angular/core';

import {TazasService} from '../../services/tazas.service'
@Component({
  selector: 'app-almacen-list',
  templateUrl: './almacen-list.component.html',
  styleUrls: ['./almacen-list.component.css']
})
export class AlmacenListComponent implements OnInit {
//almacenar respuesta
tazasA: any = []
  constructor(private tazasServices:TazasService) { }


  ngOnInit() {
    this.tazasServices.getAlmacen().subscribe(
      res => {
        this.tazasA = res;
      },
      err => console.error(err)
    );
  }

}
