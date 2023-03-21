import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-navbar-l',
  templateUrl: './navbar-l.component.html',
  styleUrls: ['./navbar-l.component.css']
})
export class NavbarLComponent implements OnInit{

  
  faUserCircle=faUserCircle;
  
  constructor(
    private userService: UserService,
    private router:Router,

  ) {}


  ngOnInit(): void {}


  logout(){
    this.userService.logout()
    .then(()=> {
      this.router.navigate([''])
    })
    .catch(error => console.log(error))
  }

}