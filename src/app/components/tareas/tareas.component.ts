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

    console.log(this.nombreTarea)
    //Crear objeto tareas

    //Agregar el objeto tarea al array

    //Reset form
  }

}
