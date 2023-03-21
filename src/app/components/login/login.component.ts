
import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; 
import { faCheck, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/servicios/user.service';
import { faAt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  faUserCircle= faUserCircle;
  faCheck = faCheck;
  faAt = faAt;
  faLock = faLock;
  faHouse=faHouse;

  formLogin:FormGroup;
  
  constructor(private router: Router,
              private userService:UserService
  ) { this.formLogin = new FormGroup({
    email:new FormControl(),
    password: new FormControl()
  }) }

  ngOnInit():void {}

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        this.router.navigate(['main'])
      })
      .catch(error => alert("Campos incorrectos, intenta nuevamente."));
  }

  registrarse(){
    this.router.navigate(['/register']);
  }

  home(){
    this.router.navigate([''])
  }
}