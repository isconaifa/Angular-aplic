import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';


@Component({
  selector: 'app-resultado-empenhos',
  imports: [
      PanelModule, 
      FieldsetModule, 
      SelectModule, 
      CommonModule, 
      FormsModule, 
      ButtonModule, 
      Message
  ],
  templateUrl: './resultado-empenhos.component.html',
  styleUrl: './resultado-empenhos.component.css'
})
export default class ResultadoEmpenhosComponent {

}
