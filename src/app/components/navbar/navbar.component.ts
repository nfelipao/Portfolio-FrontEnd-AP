import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  
  faUserCircle=faUserCircle;
  
  constructor(
    private scroller:ViewportScroller,
    private userService: UserService,
    private router:Router,

  ) {}


  ngOnInit(): void {}

  login(){
    this.router.navigate(['login'])
  }
}
