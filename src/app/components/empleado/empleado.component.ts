import { Component, OnInit } from '@angular/core';

import { EmisorService } from '../../services/emisor.service';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Emisor } from '../../models/emisor';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmisorService, EmpleadoService]
})
export class EmpleadoComponent implements OnInit {

  constructor(private emisorService: EmisorService, 
             private empleadoService: EmpleadoService) { }

  ngOnInit() {
  }

  addEmisor(form: NgForm){
      this.emisorService.postEmisor(form.value)
      .subscribe(res => {
        alert('Emisor guardado');
      });
  }

  addEmpleado(form: NgForm){
    this.empleadoService.postEmpleado(form.value)
    .subscribe(res => {
      alert('Empleado');
  
    })
  }

  getEmpleados(){
    this.empleadoService.getEmpleados()
    .subscribe(res => {
      this.empleadoService.empleados = res as Empleado[];
    });
  }

  editEmpleado(empleado: Empleado){
    this.empleadoService.selectedEmpleado = empleado;
    console.log(empleado);
  }

  deleteEmpleado(idNueProducto: number, form: NgForm){
    if(confirm('Estas seguro que desea eliminarlo?')){
      this.empleadoService.deleteEmpleado(idNueProducto)
      .subscribe(res => {
        this.getEmpleados();
        this.resetForm(form);
        alert('Empleado eliminado');
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }

}
