import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faLocationDot, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/model/usuario';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-sobremi-l',
  templateUrl: './sobremi-l.component.html',
  styleUrls: ['./sobremi-l.component.css']
})
export class SobremiLComponent implements OnInit{
  faGithub = faGithub;
  faMailBulk = faMailBulk;
  faTwitter = faTwitter;
  faLocationDot = faLocationDot;
  faEdit = faEdit;
  
  public usuarios : Usuario | undefined;
  public editUsuarios : Usuario | undefined;

  constructor(private sobremiService : SobremiService,
              ){  }

 // isloged= () => this.autenticacionService.loggedIn();

  ngOnInit(){
      this.getUser();
  }

  public getUser():void{
    this.sobremiService.getUser().subscribe({
      next: (response: Usuario) =>{
        this.usuarios=response;
      },
      error:(error: HttpErrorResponse)=>{
        console.log('error');
      }
    })
  }
  public onOpenModal(mode: string, usuarios?: Usuario):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='edit'){
      this.editUsuarios=usuarios;
      button.setAttribute('data-target', '#editSobreMiModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onUpdateInfo(usuarios: Usuario):void{
    this.editUsuarios = usuarios;
    this.sobremiService.updateUsuario(usuarios).subscribe({
      next:(response: Usuario) => {
        console.log(response);
        this.getUser();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }
}

