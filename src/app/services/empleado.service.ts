import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/empleado';

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
   }

  getEmpleados(){
    return this.http.get(this.URL_API);
  }

  postEmpleado(Empleado: Empleado){
    return this.http.post(this.URL_API, Empleado);
  }

  putEmpleado(empleado: Empleado){
    return this.http.put(this.URL_API + `/${empleado.idEmpleado}`, empleado);
  }

  deleteEmpleado(idEmpleado: number){
    return this.http.delete(this.URL_API + `/${idEmpleado}`);
  }
}
