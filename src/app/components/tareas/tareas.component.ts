import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {

    
    //Crear objeto tareas

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto tarea al array
    this.listTareas.push(tarea);

    //Reset form

    this.nombreTarea = '';
  }

  eliminarTarea(index: number) {

    this.listTareas.splice(index,1);

  }
  actualizarTarea(tarea: Tarea, index:number):void{
    this.listTareas[index].estado = !tarea.estado
  }

}
