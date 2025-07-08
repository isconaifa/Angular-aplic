import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar2Component } from '../sidebar2/sidebar2.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  imports: [Sidebar2Component, NavbarComponent, RouterOutlet, NavbarComponent, Sidebar2Component, CommonModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
   


  isCollapsed: boolean = false;
    sideNavStatus: boolean = false

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
