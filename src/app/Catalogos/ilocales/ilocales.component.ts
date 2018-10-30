import { Component, OnInit } from '@angular/core';
import { SPINNER_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-spinner',
  templateUrl: './ilocales.component.html',
  styleUrls: ['./ilocales.component.scss']
})
export class ImpuestosLocales implements OnInit {

  public showSource;
  public colors = 'primary';
  public modes = 'determinate';
  public values = 50;

  public color;
  public mode ;
  public value;

  public spinnerHelpers: any = SPINNER_HELPERS;
  constructor() { }

  ngOnInit() {
  }
  // showProgressBarCode;
	  
}
