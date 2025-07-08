import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectListAno } from '../../models/SelectListAno';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';
import { RadioButton } from 'primeng/radiobutton';



@Component({
  selector: 'app-consultas',
  imports: [ 
   PanelModule, 
   FieldsetModule, 
   SelectModule, 
   CommonModule, 
   FormsModule, 
   ButtonModule, 
   Message, 
   RadioButton
  ],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export default class ConsultasComponent implements OnInit {
public selectListAno: SelectListAno[] = [];


selecioneCarga: any = null;
selectedCategory: any = null;

cargas: any[] = [
        { name: 'CONTABILIDADE', key: 'C' },
        { name: 'FOLHA', key: 'F' },
        { name: 'PATRIMÔNIO', key: 'P' },
        { name: 'CONTRATOS', key: 'C' },
    ];

    categories: any[] = [
        { name: ' MUNICIPAL', key: 'A' },
        { name: 'ESTADUAL', key: 'M' },
        { name: 'TODAS', key: 'P' },
    ];
 
  ExercicioSelecionado: SelectListAno | undefined;
  public populaSelectListAno(): SelectListAno[] {
    const anoAtual = new Date().getFullYear();
    const arrayAno: SelectListAno[] = [];

    for (let i = 2004; i <= anoAtual; i++) {
      arrayAno.push(new SelectListAno({
        anoNum: i,
        anoDesc: i.toString()
      }));
    }

    return arrayAno;
  }
  ngOnInit(): void {
    this.selectListAno = this.populaSelectListAno();
    this.selectedCategory = this.categories[0];
    this.selecioneCarga = this.cargas[0];
  }
}
