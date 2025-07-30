import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/message';
import { AplicService } from '../../aplic/services/aplic.service';
import { Empenho } from '../../models/Empenho';
import { AppStateService } from '../../aplic/services/app-state.service';
import { combineLatest } from 'rxjs';



@Component({
  selector: 'app-resultado-empenhos',
  imports: [
      PanelModule, 
      FieldsetModule, 
      SelectModule, 
      CommonModule, 
      FormsModule, 
      ButtonModule, 
      Message,
  ],
  templateUrl: './resultado-empenhos.component.html',
  styleUrl: './resultado-empenhos.component.css'
})
export default class ResultadoEmpenhosComponent implements OnInit {
  empenhos: Empenho[] = [];

  constructor(
    private aplicService: AplicService,
    private appState: AppStateService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.appState.unidadeGestoraSelecionada$,
      this.appState.exercicioSelecionado$
    ]).subscribe(([codigoUG, ano]) => {
      if (codigoUG !== null && ano !== null) {
        this.buscarEmpenhos(codigoUG, ano);
      } else{
        const ug = sessionStorage.getItem('unidadeGestoraSelecionada')
        const ex = sessionStorage.getItem('exercicioSelecionado')
        if (ug && ex) {
          this.buscarEmpenhos(Number(ug), Number(ex));
        }
      }
    });
  }

  buscarEmpenhos(codigoUG: number, ano: number): void {
    this.aplicService.getEmpenhos(codigoUG, ano).subscribe({
      next: dados => {
        this.empenhos = dados;
      },
      error: err => {
        console.error('Erro ao buscar empenhos', err);
      }
    });
  }

}

