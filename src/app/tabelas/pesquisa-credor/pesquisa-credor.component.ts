import { Component, OnInit } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { Dialog } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Credor } from '../../models/Credor';
import { CommonModule } from '@angular/common';
import { AplicService } from '../../aplic/services/aplic.service';
import { AppStateService } from '../../aplic/services/app-state.service';
import { combineLatest, finalize } from 'rxjs';



@Component({
  selector: 'app-pesquisa-credor',
  imports: [
    RouterModule, 
    CommonModule,
    ProgressSpinnerModule,
    CheckboxModule,
    Dialog
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

