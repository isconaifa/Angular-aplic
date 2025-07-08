import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
@Output() sideNavToggled = new EventEmitter<boolean>();

list = [
  {
    number: '1',
    name: 'Sign Up',
    route: 'sin-up'
  },
  {
    number: '2',
    name: 'Log In',
    route: 'login'
  },
  {
    number: '3',
    name: 'Seu Perfil',
    route: 'perfil'
  },
  {
    number: '4',
    name: 'Log Out',
    route: 'log-out'
  },
];

menuStatus: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  SideNavBar(){
   this.menuStatus = !this.menuStatus;
   this.sideNavToggled.emit(this.menuStatus);
  }

}
