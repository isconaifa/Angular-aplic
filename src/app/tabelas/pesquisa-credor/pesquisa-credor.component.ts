import { Component, OnInit } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Credor } from '../../models/Credor';
import { CommonModule } from '@angular/common';
import { AplicService } from '../../aplic/services/aplic.service';
import { AppStateService } from '../../aplic/services/app-state.service';
import { buffer, combineLatest, finalize } from 'rxjs';

 
interface PesquisaPor {
  name: string;
  code: string;
}

@Component({
  selector: 'app-pesquisa-credor',
  imports: [
    RouterModule, 
    CommonModule,
    ProgressSpinnerModule,
    CheckboxModule,
    Dialog,
    ListboxModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './pesquisa-credor.component.html',
  styleUrl: './pesquisa-credor.component.css'
})
export default class PesquisaCredorComponent implements OnInit {
 credores: Credor[] = [];
 linhaSelecionada?: Credor;
 carregando: boolean = false;
  visible: boolean = false;

  

 constructor(
  private aplicService: AplicService,
  private appState: AppStateService,
  private route: ActivatedRoute
 ) { }

 showDialog() {
        this.visible = true;
    }


  pesquisas: PesquisaPor[] = [
  { name: 'CPF/CNPJ', code: 'cpf_cnpj' },
  { name: 'CREDOR', code: 'credor' },
  { name: 'UF', code: 'uf' },
  { name: 'MUNICIPIO', code: 'municipio' },
  { name: 'TIPO DE PESSOA', code: 'tipo_pessoa' },
  { name: 'TIPO DE EMPRESA', code: 'tipo_empresa' }
];

PesquisaSelecionada: string[] = [];
// variáveis para controle visual, linha selecionada etc
rowSelecionada: any;


  ngOnInit(): void {
    combineLatest([
      this.appState.unidadeGestoraSelecionada$
    ]).subscribe(([codigoUG]) => {
      if (codigoUG !== null) {
        this.buscarCredores(codigoUG);
      } else{
        const ug = sessionStorage.getItem('unidadeGestoraSelecionada')
        if (ug) {
          this.buscarCredores(Number(ug));
        }
      }
    });

    this.PesquisaSelecionada = this.pesquisas.slice(0, 2).map(p => p.code);
  }

  getNomeColuna(code: string): string {
  const coluna = this.pesquisas.find(p => p.code === code);
  return coluna ? coluna.name : code;
}

getLarguraColuna(code: string): number | null {
  if (code === 'cpf_cnpj') return 250;
  if (code === 'uf') return 80;
  return null;
}

get colunasOrdenadas(): string[] {
  return this.pesquisas
    .map(p => p.code)
    .filter(code => this.PesquisaSelecionada.includes(code));
}


selecionarRow(item: any): void {
  this.linhaSelecionada = item;
}



  

  buscarCredores(codigoUG: number): void{
     this.carregando = true;
    this.aplicService.getCredores(codigoUG)
     .pipe(
      finalize(() => this.carregando = false) // garante que carregando = false após o observable terminar
    )
    .subscribe({
      next: dados => {
        this.credores = dados;
      },
      error: err => {
         this.carregando = false;
        console.error('Erro ao buscar credores', err);
      }
    });
  }


  selecionarLinha(item: Credor): void {
    this.linhaSelecionada = item;
  }
  }

