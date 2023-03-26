import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/model/skill';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';


@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  public skill: Skill[] = [];
  public editSkill: Skill | undefined;
  public deleteSkill: Skill | undefined;

  constructor(private tecnologiasService: TecnologiasService,
  ) { }



  ngOnInit(): void {
    this.getSkill();
  }

  public getSkill(): void {
    this.tecnologiasService.getSkill().subscribe({
      next: (response: Skill[]) => {
        this.skill = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
}