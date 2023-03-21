import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { Education } from 'src/app/model/education';

import { FormacionService } from 'src/app/servicios/formacion.service';


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit{
  faCalendar = faCalendar;
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  public educations:Education[]=[];
  public educations2 = this.formacionService.getEducation();
  public editEducation:Education | undefined;
  public deleteEducation:Education | undefined;

  constructor(private formacionService:FormacionService,
              ){ }

  ngOnInit(): void{
    this.getEducation();
  }

  public getEducation():void{
    this.formacionService.getEducation().subscribe({
      next:(response: Education[]) =>{
        this.educations=response;
      },
      error:(error:HttpErrorResponse)=>{
        console.log('error');
      }
    })
  }
  public onOpenModal(mode: string, education?: Education):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target', '#addEducationModal');
    }else if(mode==='delete'){
      this.deleteEducation=education;
      button.setAttribute('data-target', '#deleteEducationModal');
    }else if(mode==='edit'){
      this.editEducation=education;
      button.setAttribute('data-target', '#editEducationModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddEducation(addForm: NgForm):void{
    document.getElementById('add-education-form')?.click();
    this.formacionService.addEducation(addForm.value).subscribe({
      next:(response:Education) => {
        console.log(response);
        this.getEducation();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      },
    });
  }
  public onUpdateEducation(education:Education):void{
    this.editEducation=education;
    this.formacionService.updateEducation(education).subscribe({
      next:(response: Education) => {
        console.log(response);
        this.getEducation();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onDeleteEducation(idEdu: number):void{
    this.formacionService.deleteEducation(idEdu).subscribe({
      next:(response:void) => {
        console.log(response);
        this.getEducation();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  
}
