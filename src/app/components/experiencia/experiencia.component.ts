import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  faPlus = faPlus;
  faClock = faClock;
  faEdit = faEdit;
  faTrash = faTrash;

  public experiencia: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined;
  public deleteExperiencia: Experiencia | undefined;

  constructor(private experienciaService: ExperienciaService,
  ) { }


  ngOnInit(): void {
    this.getExperiencia();
  }

  public getExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe({
      next: (response: Experiencia[]) => {
        this.experiencia = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }

}
