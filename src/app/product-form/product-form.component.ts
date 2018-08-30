import { Component, OnInit } from '@angular/core';
import { Product } from '../book.model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  model = new Product(1,'','','http://');

  constructor() { }

  ngOnInit() {
  }

  get currentBook(){
    return JSON.stringify(this.model);
  }

}
