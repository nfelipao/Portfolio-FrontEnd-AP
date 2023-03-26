import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/model/skill';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-tecnologias-l',
  templateUrl: './tecnologias-l.component.html',
  styleUrls: ['./tecnologias-l.component.css']
})
export class TecnologiasLComponent implements OnInit {
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
  public onOpenModal(mode: string, skill?: Skill): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillModal');
    } else if (mode === 'delete') {
      this.deleteSkill = skill;
      button.setAttribute('data-target', '#deleteSkillModal');
    } else if (mode === 'edit') {
      this.editSkill = skill;
      button.setAttribute('data-target', '#editSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddSkill(addForm: NgForm): void {
    document.getElementById('add-skill-form')?.click();
    this.tecnologiasService.addSkill(addForm.value).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkill();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    });
  }
  public onUpdateSkill(skill: Skill): void {
    this.editSkill = skill;
    this.tecnologiasService.updateSkill(skill).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkill();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public onDeleteSkill(idSkill: number): void {
    this.tecnologiasService.deleteSkill(idSkill).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getSkill();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
