import { Component, OnInit } from '@angular/core';
import { ICON_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-icons',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class Productos implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  iconHelpers: any = ICON_HELPERS;

}
