import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Usuario } from 'src/app/model/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  faGithub = faGithub;
  faMailBulk = faMailBulk;
  faTwitter = faTwitter;
  faLocationDot = faLocationDot;
  faEdit = faEdit;

  public usuarios: Usuario | undefined;
  public editUsuarios: Usuario | undefined;

  constructor(private sobremiService: SobremiService,
  ) { }


  ngOnInit() {
    this.getUser();
  }

  public getUser(): void {
    this.sobremiService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuarios = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error');
      }
    })
  }
}
