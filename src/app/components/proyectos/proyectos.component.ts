import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Proyect } from 'src/app/model/proyect';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  public proyect:Proyect[]=[];
  public editProyect: Proyect | undefined;
  public deleteProyect: Proyect | undefined;

  constructor(private proyectosService: ProyectosService,
              ){}


  
  ngOnInit(): void {
      this.getProyect();
  }

  ;

  public getProyect():void{
    this.proyectosService.getProyect().subscribe({
      next:(response: Proyect[]) =>{
        this.proyect=response;
      },
      error:(error:HttpErrorResponse)=>{
        console.log('error');
      }
    })
  }
}