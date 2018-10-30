import { Component, OnInit } from '@angular/core';
import { EXPANSION_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-expansion-panel',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.scss']
})
export class Impuestos implements OnInit {
	step = 0;
	public basicPanelOpenState:any;
	expansionHelpers = EXPANSION_HELPERS;
  	constructor() { }

  	ngOnInit() {
  	}
  	setStep(index: number) {
	    this.step = index;
	}

	nextStep() {
	    this.step++;
	}

	prevStep() {
	    this.step--;
	}

}
