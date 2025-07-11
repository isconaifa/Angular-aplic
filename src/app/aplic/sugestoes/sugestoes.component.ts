import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-sugestoes',
  imports: [
    PanelModule,
    FormsModule, 
    CommonModule
  ],
  templateUrl: './sugestoes.component.html',
  styleUrl: './sugestoes.component.css'
})
export default class SugestoesComponent {
  
}