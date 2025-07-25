import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectListAno } from '../../models/SelectListAno';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-quantidades-reenvios',
  imports: [ 
    PanelModule, 
    FieldsetModule, 
    SelectModule, 
    CommonModule, 
    FormsModule, 
    ButtonModule, 
    Message],
  templateUrl: './quantidades-reenvios.component.html',
  styleUrl: './quantidades-reenvios.component.css'
})
export default class QuantidadesReenviosComponent implements OnInit {
 public selectListAno: SelectListAno[] = [];
 
  ExercicioSelecionado: SelectListAno | undefined;
  public populaSelectListAno(): SelectListAno[] {
    const anoAtual = new Date().getFullYear();
    const arrayAno: SelectListAno[] = [];

    for (let i = 2011; i <= anoAtual; i++) {
      arrayAno.push(new SelectListAno({
        anoNum: i,
        anoDesc: i.toString()
      }));
    }

    return arrayAno;
  }
  ngOnInit(): void {
    this.selectListAno = this.populaSelectListAno();
  }
 
}
