import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { RadioButton } from 'primeng/radiobutton';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Fluid } from 'primeng/fluid';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumber } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { Orgao } from '../../models/Orgao';
import { AplicService } from '../../aplic/services/aplic.service';
import { AppStateService } from '../../aplic/services/app-state.service';
import { combineLatest, finalize} from 'rxjs';
import { Funcao } from '../../models/Funcao';
import { Subfuncao } from '../../models/subfuncao';
import { Programa } from '../../models/Programa';
import { UnidadeOrcamentaria } from '../../models/UnidadeOrcamentaria';
import { Acao } from '../../models/Acao';
import { GrupoFonte } from '../../models/GrupoFonte';
import { DetalheFonte } from '../../models/DetalheFonte';
import { FonteDestinoRecurso } from '../../models/FonteDestinoRecurso';
import { ModalidadeLicitacao } from '../../models/ModalidadeLicitacao';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-formulario-empenhos',
  imports: [
    FormsModule,
    CommonModule,
    FieldsetModule,
    ButtonModule,
    MessageModule,
    PanelModule,
    SelectModule,
    DatePickerModule,
    FluidModule,
    RadioButton,
    Checkbox,
    InputTextModule,
    Fluid,
    InputMaskModule,
    InputNumber,
    CardModule,
    RouterModule,
    Dialog
  ],
  templateUrl: './formulario-empenhos.component.html',
  styleUrl: './formulario-empenhos.component.css',
})
export default class FormularioEmpenhosComponent implements OnInit {
  visible: boolean = true;
  checked: boolean = false;
   checkedLiquidado: boolean = false;
  numCredor: string | undefined;
  nomeCredor: string | undefined;
  a: string | undefined;
  numDotacao: string | undefined;
  numEmpenho: string | undefined;
  valorEmpenho1: number = 0;
  valorEmpenho2: number = 0;
  numLicitacao: number =0;
  numContrato: number =0;
  numConvenio: number =0;
  numConcurso: number =0;
  somente!: string;

  inputBanco: string | undefined;
  inputNumDoc: string | undefined;
  inputAgencia: string | undefined;
  inputContaCorrente: string | undefined;

 orgaos: Orgao[] = [];
 orgaoSelecionado: number | null = null;

 funcoes: Funcao[] = [];
 funcaoSelecionada: number | null = null;

 subfuncoes: Subfuncao[] = [];
 subfuncaoSelecionada: number | null = null;

 programas: Programa[] = [];
 programaSelecionado: number | null = null;

 unidadeOrcamentarias: UnidadeOrcamentaria[] = [];
 unidadeOrcamentariaSelecionada: number | null = null;

 acoes:Acao[] = [];
 acaoSelecionada: number | null = null;

 modalidadeLicitacoes: ModalidadeLicitacao[] = [];
 modalidadeLicitacaoSelecionada: number | null = null;

 grupoFontes: GrupoFonte[] = [];
 grupoFonteSelecionado: number | null = null;

 detalheFontes: DetalheFonte[] = [];
 detalheFonteSelecionado: number | null = null;

 fonteDestinoRecursos: FonteDestinoRecurso[] = [];
 fonteDestinoRecursoSelecionado: number | null = null;

  
  pizza: string[] = [];



  selectedCity: City | undefined;

  data1: Date | undefined;

  data2: Date | undefined;

  data3: Date | undefined;

  data4: Date | undefined;
  dataLiquidado1: Date | undefined;
  dataLiquidado2: Date | undefined;

  dataAnulado1: Date | undefined;
  dataAnulado2: Date | undefined;

  datasomentePago1: Date | undefined;
  datasomentePago2: Date | undefined;


 

 constructor(
  private route: ActivatedRoute,
  private aplicService: AplicService,
  private appState: AppStateService
) {}
  

  ngOnInit() {
  this.buscarModalidadeLicitacao();
     combineLatest([
      this.appState.unidadeGestoraSelecionada$,
      this.appState.exercicioSelecionado$,
      this.appState.funcaoSelecionada$,
      this.appState.orgaoSelecionado$
    ]).subscribe(([codigoUG, ano, codigFun, codidoOrg]) => {

      // Se algum dos valores for null/undefined, pega do sessionStorage
      const ugFinal = codigoUG ?? Number(sessionStorage.getItem('unidadeGestoraSelecionada'));
      const anoFinal = ano ?? Number(sessionStorage.getItem('exercicioSelecionado'));
      const fnFinal = codigFun ?? Number(sessionStorage.getItem('funcaoSelecionada'));
      const orgaoFinal = codidoOrg ?? Number(sessionStorage.getItem('orgaoSelecionado'));
      if (anoFinal != null){
      this.buscarGupoFonte(anoFinal);
      this.buscarDetalheFonte(anoFinal);
      }
      if (ugFinal != null && anoFinal != null) {
        this.buscarOrgaos(ugFinal, anoFinal);
        this.buscarFuncaos(ugFinal, anoFinal);
        this.buscarAcaos(ugFinal, anoFinal);
        this.buscaDestinoFonteRecurso(ugFinal, anoFinal);
      }
      if (!isNaN(fnFinal)) {
          this.buscarSubFuncao(ugFinal, anoFinal, fnFinal);
          this.buscarProgramas(ugFinal, anoFinal, fnFinal);
        }

        if (!isNaN(orgaoFinal)) {
          this.buscarUnidadeOrcamentaria(ugFinal, anoFinal, orgaoFinal);
        }
    });
       
     this.route.queryParams.subscribe(params => {
      const selecionados = params['selecionados'];
      const nomeCredor = params['nomeCredor'];

      if (selecionados) {
        this.numCredor = `${selecionados} selecionados`;
      }

      if (nomeCredor) {
        this.nomeCredor = nomeCredor;
      }
    });

   
  }

   buscarOrgaos(codigoUG: number, ano: number): void {
    this.aplicService.getOrgao(codigoUG, ano).subscribe({
        next: orgaos => this.orgaos = orgaos,
        error: err => console.error('Erro ao buscar orgyos', err)
      });
    
    }
  buscarFuncaos(codigoUG: number, ano: number): void {
    this.aplicService.getFuncao(codigoUG, ano)
    .subscribe({
      next: funcoes => {
        this.funcoes = funcoes;
        // console.log('Funções carregadas:', this.funcoes);
      },
      error: err => {
        console.error('Erro ao buscar funções', err);
      }
    });
}

onChangeFuncao() {
  if (this.funcaoSelecionada != null) {
    this.appState.setFuncaoSelecionada(this.funcaoSelecionada);
  }
}
    
 onChangeOrgao(){
  if (this.orgaoSelecionado != null) {
    this.appState.setOrgaoSelecionado(this.orgaoSelecionado);
  }
 }
    buscarSubFuncao(codigoUG: number, ano: number, codigoFuncao: number): void {
    this.aplicService.getSubfuncao(codigoUG, ano, codigoFuncao).subscribe({
      next: subfuncoes => this.subfuncoes = subfuncoes,
      error: err => console.error('Erro ao buscar subfunções', err)
    });
  }

  buscarProgramas(codigoUG: number, ano: number, codigoFuncao: number): void {
    this.aplicService.getPrograma(codigoUG, ano, codigoFuncao).subscribe({
      next: programas => this.programas = programas,
      error: err => console.error('Erro ao buscar programas', err)
    });
   
  }

  buscarUnidadeOrcamentaria(codigoUG: number, ano: number, codidoOrg: number): void {
    this.aplicService.getUnidadeOrcamentaria(codigoUG, ano, codidoOrg).subscribe({
     next: unidadeOrcamentarias => this.unidadeOrcamentarias = unidadeOrcamentarias,
      error: err => console.error('Erro ao buscar unidade orcamentarias', err)
    });
  }

  buscarAcaos(codigoUG: number, ano: number): void {
    this.aplicService.getAcao(codigoUG, ano).subscribe({
      next: acoes => this.acoes = acoes,
      error: err => console.error('Erro ao buscar acoes', err)
    });
  }

  buscarGupoFonte(ano : number): void {
    this.aplicService.getGrupoFonte(ano).subscribe({
      next: grupoFontes => this.grupoFontes = grupoFontes,
      error: err => console.error('Erro ao buscar grupo fontes', err)
    });
  }

  buscarDetalheFonte(ano : number): void {
    this.aplicService.getDetalheFonte(ano).subscribe({
      next: detalheFontes => this.detalheFontes = detalheFontes,
      error: err => console.error('Erro ao buscar detalhe fontes', err)
    });
  }

  buscarModalidadeLicitacao(): void {
    this.aplicService.getModalidadeLicitacao().subscribe({
      next: modalidades =>{
        this.modalidadeLicitacoes = modalidades;
        // console.log('Modalidades carregadas:', this.modalidadeLicitacoes);
      } ,
      error: err => console.error('Erro ao buscar modalidades', err)
    });
    
  }

  buscaDestinoFonteRecurso(codigoUG: number, ano: number): void {
  this.aplicService.getFonteDestinoRecurso(codigoUG, ano).subscribe({
    next: fonteDestinoRecursos => this.fonteDestinoRecursos = fonteDestinoRecursos,
    error: err => console.error('Erro ao buscar fontes de destino de recursos', err)
  });
}
}
