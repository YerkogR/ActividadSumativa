import { Component, OnInit } from '@angular/core';
import {Nota} from '../../interfaces/nota';
import {ServicioNotasService} from '../../servicio-notas.service';


@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})


export class VisualizarComponent implements OnInit {

  ListaNotas:Array<Nota>=[];
  constructor(private ServicioNotas:ServicioNotasService) { }

  ngOnInit(): void {
    this.ServicioNotas.Consultar().subscribe(datos=>{
      for(let i=0; i<datos.length; i++){
        this.ListaNotas.push(datos[i]);
      } 
    });
  }
}