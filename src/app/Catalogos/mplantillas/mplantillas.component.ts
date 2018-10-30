import { Component, OnInit } from '@angular/core';
import { CARDS_HELPERS } from './helpers.data';

@Component({
  selector: 'cdk-cards',
  templateUrl: './mplantillas.component.html',
  styleUrls: ['./mplantillas.component.scss']
})
export class PlantillasPDF implements OnInit {

  constructor() { }

  ngOnInit() {
  }
cardsHelpers: any = CARDS_HELPERS;
}
