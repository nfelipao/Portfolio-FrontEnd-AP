import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Education } from 'src/app/model/education';
import { FormacionService } from 'src/app/servicios/formacion.service';


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  faCalendar = faCalendar;
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  public educations: Education[] = [];
  public educations2 = this.formacionService.getEducation();
  public editEducation: Education | undefined;
  public deleteEducation: Education | undefined;

  constructor(private formacionService: FormacionService,
  ) { }

  ngOnInit(): void {
    this.getEducation();
  }

  public getEducation(): void {
    this.formacionService.getEducation().subscribe({
      next: (response: Education[]) => {
        this.educations = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
}
