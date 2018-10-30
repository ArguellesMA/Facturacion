import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { STEPPER_HELPERS } from './etiquetas.data';

@Component({
  selector: 'cdk-stepper',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss']
})
export class EtiquetasPersonalizadas implements OnInit {
	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
	stepperHelpers = STEPPER_HELPERS;
  	constructor(private formBuilder: FormBuilder) { }

  	ngOnInit() {
  		this.firstFormGroup = this.formBuilder.group({
	      firstCtrl: ['', Validators.required]
	    });
	    this.secondFormGroup = this.formBuilder.group({
	      secondCtrl: ['', Validators.required]
	    });
  	}

}
