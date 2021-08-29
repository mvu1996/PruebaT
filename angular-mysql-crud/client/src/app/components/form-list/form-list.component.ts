import { Component, OnInit } from '@angular/core';

import {TazasService} from "../../services/tazas.service";
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  constructor(private tazaServices: TazasService) { }

  ngOnInit(): void {
    this.tazaServices.getTazas().subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }

}
