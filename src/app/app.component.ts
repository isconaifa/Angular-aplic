import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
   imports: [CommonModule, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export default class AppComponent {
  title = 'app-aplic-web';
  sideNavStatus: boolean = false
}

//https://primeng.org/megamenu

//https://www.youtube.com/watch?v=OPt87w9WuZo