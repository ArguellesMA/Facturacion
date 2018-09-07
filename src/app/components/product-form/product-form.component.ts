import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../../services/producto.service';
import { NgForm } from '@angular/forms';
import { Producto } from '../../models/producto';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [ProductoService]
})
export class ProductFormComponent implements OnInit {

  //model = new Producto(1,'','','http://localhost:3000/producto');

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  /*get currentBook(){
    return JSON.stringify(this.model);
  }*/
   
  addProducto(form: NgForm){
    if(form.value.idNueProducto){
      this.productoService.putProducto(form.value)
      .subscribe(res => {
        this.resetForm();
        alert('Producto actualizado');
        this.getProductos();
      })
    } else {
      this.productoService.postProducto(form.value)
      .subscribe(res => {
        this.resetForm();
        alert('Producto guardado');
        this.getProductos();
      });
    }
  }

  getProductos(){
    this.productoService.getProductos()
    .subscribe(res => {
      this.productoService.producto = res as Producto[];
    });
  }

  deleteProducto(idNueProducto: number, form: NgForm){
    if(confirm('Estas seguro que desea eliminarlo?')){
      this.productoService.deleteProducto(idNueProducto)
      .subscribe(res => {
        this.getProductos();
        this.resetForm(form);
        alert('Producto eliminado');
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }
}
