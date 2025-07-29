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
export default class ResultadoEmpenhosComponent implements OnInit {
   
  empenhos: Empenho[] = [];

  constructor(private aplicService: AplicService,
    private appState: AppStateService
  ) { }
  ngOnInit(): void {
   this.buscarEmpenhos();
  }

  buscarEmpenhos(): void{
    const ano = this.appState.exercicioSelecionado;
    const unidade = this.appState.unidadeGestoraSelecionada;
    if (ano && unidade){
      this.aplicService.getEmpenhos(unidade, ano).subscribe(data =>{
        this.empenhos = data;
        console.log(this.empenhos);
      });
    } else{
      console.log("Ano ou Unidade Gestora não selecionados");
    }
    }
  }


