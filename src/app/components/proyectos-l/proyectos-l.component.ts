import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Proyect } from 'src/app/model/proyect';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos-l',
  templateUrl: './proyectos-l.component.html',
  styleUrls: ['./proyectos-l.component.css']
})
export class ProyectosLComponent implements OnInit{
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  public proyect:Proyect[]=[];
  public editProyect: Proyect | undefined;
  public deleteProyect: Proyect | undefined;

  constructor(private proyectosService: ProyectosService,
              ){}

  //isloged = () => this.autenticacionService.loggedIn()
  
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
  public onOpenModal(mode: string, proyect?: Proyect):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target', '#addProyectModal');
    }else if(mode==='delete'){
      this.deleteProyect=proyect;
      button.setAttribute('data-target', '#deleteProyectModal');
    }else if(mode==='edit'){
      this.editProyect=proyect;
      button.setAttribute('data-target', '#editeProyectModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddProyect(addForm: NgForm):void{
    document.getElementById('add-proyect-form')?.click();
    this.proyectosService.addProyect(addForm.value).subscribe({
      next:(response:Proyect)=>{
        console.log(response);
        this.getProyect();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
    });
  }
  public onUpdateProyect(proyect: Proyect): void {
    this.editProyect = proyect;
    this.proyectosService.updateProyect(proyect).subscribe({
      next: (response: Proyect) => {
        console.log(response);
        this.getProyect();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onDeleteProyect(IdProy: number): void {
    this.proyectosService.deleteProyect(IdProy).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProyect();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}