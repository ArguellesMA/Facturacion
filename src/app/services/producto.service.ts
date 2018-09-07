import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { ProductFormComponent } from '../components/product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  selectedProducto: Producto;
  producto: Producto[];
  readonly URL_API = 'http://localhost:3000/producto';

  constructor(private http: HttpClient) { 
    this.selectedProducto = new Producto();
  }

  getProductos(){
    return this.http.get(this.URL_API);
  }

  postProducto(Producto: Producto){
    return this.http.post(this.URL_API, Producto);
  }

  putProducto(producto: Producto){
    return this.http.put(this.URL_API + `/${producto.idNueProducto}`, producto);
  }

  deleteProducto(idNueProducto: number){
    return this.http.delete(this.URL_API + `/${idNueProducto}`);
  }
}
