import { Component, OnInit } from '@angular/core';
import { LIST_HELPERS,  Messages, Links} from './helpers.data';

@Component({
  selector: 'cdk-list',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  //animations: [fadeAnimation]
})
export class Empleados implements OnInit {

    listHelpers: any = LIST_HELPERS;
     links = Links;

    showMultiListCode: boolean = false;
     messages = Messages;
    constructor() { }

    ngOnInit() {
    }
  

}
