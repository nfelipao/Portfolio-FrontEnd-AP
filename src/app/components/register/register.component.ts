import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faAt, faCheck, faLock } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/servicios/user.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formReg: FormGroup;

  faCheck = faCheck;
  faUserCircle = faUserCircle;
  faAt = faAt;
  faLock = faLock;
  faHouse=faHouse;


  constructor(private router: Router,private userService:UserService){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit():void{
  }

  onSubmit(){
    this.userService.register(this.formReg.value)
    .then( response => {
    
      this.router.navigate(['login'])
    })
    .catch(error => console.log(console.error()));
  }

  home(){
    this.router.navigate([''])
  }

}
