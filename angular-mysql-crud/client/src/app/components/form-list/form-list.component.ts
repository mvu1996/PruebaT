import { Component, OnInit } from '@angular/core';

import {TazasService} from "../../services/tazas.service";
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
 tazav : any = [];
  constructor(private tazaServices: TazasService) { }

  ngOnInit(): void {
    this.tazaServices.getTazas().subscribe(
      res => this.tazav = res,
      err => console.error(err)
    );
  }

}
