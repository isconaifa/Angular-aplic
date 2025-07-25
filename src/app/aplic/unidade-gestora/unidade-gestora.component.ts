import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectListAno } from '../../models/SelectListAno';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { Panel } from "primeng/panel";
import { RadioButton } from 'primeng/radiobutton';
import { AplicService } from '../services/aplic.service';




interface municipio {
  name: string;
}
interface TipoCarga {
  name: string;
}

interface municipio {
  name: string;
}


interface selecionartipo {
  name: string;
}
@Component({
  selector: 'app-unidade-gestora',
  imports: [
    ButtonModule,
    FieldsetModule,
    SelectModule,
    SelectModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    CommonModule,
    Panel,
    RadioButton
],
  templateUrl: './unidade-gestora.component.html',
  styleUrl: './unidade-gestora.component.css'
})
export default class UnidadeGestoraComponent implements OnInit {
  municipios: municipio[] | undefined;
  municipioSelecionado: municipio | undefined;

  constructor(private aplicService: AplicService) { }

Exercicios: { exercicio: number }[] = [];
exercicioSelecionado: { exercicio: number } | null = null;


  public selectListAno: SelectListAno[] = [];
  ExercicioSelecionado: SelectListAno | undefined;

  selecionarTipos: selecionartipo[] | undefined;
  selecionarTiposSelecionado: selecionartipo | undefined;

  value: string | undefined;

  TipoCargas: TipoCarga[] | undefined;
  TipoCargaSelecionada: TipoCarga | undefined;

  infoRecebidaSelecionadas: any[] = [];

  InfoRecebidas: any[] = [
    { name: 'Orçamento', key: 'O' },
    { name: 'Carga Inicial', key: 'I' },
    { name: 'Encerramento', key: 'E' },
  ];

  modoSelecionado: any = null;
  modos: any[] = [
        { name: 'MUNCIPICAL', key: 'M' },
        { name: 'ESTADUAL', key: 'E' },
    ];
  

  selectedCategories: any[] = [];

  categories: any[] = [
    { name: 'Jan', key: 'J' },
    { name: 'Fev', key: 'F' },
    { name: 'Mar', key: 'M' },
    { name: 'Abr', key: 'A' },
    { name: 'Mai', key: 'M' },
    { name: 'Jun', key: 'J' },
    { name: 'Jul', key: 'J' },
    { name: 'Ago', key: 'A' },
    { name: 'Set', key: 'S' },
    { name: 'Out', key: 'O' },
    { name: 'Nov', key: 'N' },
    { name: 'Dez', key: 'D' },
  ];


  // Exemplo de divisão em grupos de 6


  public populaSelectListAno(): SelectListAno[] {
    const anoAtual = new Date().getFullYear();
    const arrayAno: SelectListAno[] = [];

    for (let i = 2008; i <= anoAtual; i++) {
      arrayAno.push(new SelectListAno({
        anoNum: i,
        anoDesc: i.toString()
      }));
    }

    return arrayAno;
  }
  ngOnInit(): void {



    
    this.municipios = [
      { name: 'ALTO ALEGRE' },
      { name: 'ACORIZAL' },
      { name: 'AGUA BOA' },
      { name: 'ALTA FLORESTA' },
      { name: 'ALTO ARAGUAIA' },
      { name: 'ALTO BOA VISTA' },
      { name: 'ALTO GARCAS' },
      { name: 'ALTO PARAGUAI' },
      { name: 'ALTO TAQUARI' },
      { name: 'APIACAS' },
      { name: 'ARAGUAIANA' },
      { name: 'ARAGUAINHA' },
      { name: 'ARAPUTANGA' },
      { name: 'ARENAPOLIS' },
      { name: 'ARIPUANA' },
      { name: 'BARAO DE MELGACO' },
      { name: 'BARRA DO BUGRES' },
      { name: 'BARRA DO GARCAS' },
      { name: 'BOA ESPERANCA DO NORTE' },
      { name: 'BOM JESUS DO ARAGUAIA' },
      { name: 'BRASILIA' },
      { name: 'BRASNORTE' },
      { name: 'CACERES' },
      { name: 'CAMPINAPOLIS' },
      { name: 'CAMPO NOVO DE PARECIS' },
      { name: 'CAMPO VERDE' },
      { name: 'CAMPOS DE JULIO' },
      { name: 'CANABRAVA DO NORTE' },
      { name: 'CANARANA' },
      { name: 'CARLINDA' },
      { name: 'CASTANHEIRA' },
      { name: 'CHAPADA DOS GUIMARAES' },
      { name: 'CLAUDIA' },
      { name: 'COCALINHO' },
      { name: 'COLIDER' },
      { name: 'COLNIZA' },
      { name: 'COMODORO' },
      { name: 'CONFRESA' },
      { name: 'CONQUISTA DOESTE' },
      { name: 'COTRIGUACU' },
      { name: 'CUIABA' },
      { name: 'CURVELANDIA' },
      { name: 'DENISE' },
      { name: 'DIAMANTINO' },
      { name: 'DOM AQUINO' },
      { name: 'FELIZ NATAL' },
      { name: 'FIGUEIROPOLIS DOESTE' },
      { name: 'GAUCHA DO NORTE' },
      { name: 'GENERAL CARNEIRO' },
      { name: 'GORIA DOESTE' },
      { name: 'GUARANTA DO NORTE' },
      { name: 'GUIRATINGA' },
      { name: 'IDIAVAI' },
      { name: 'IPIRANGA DO NORTE' },
      { name: 'ITANHANGA' },
      { name: 'ITAUBA' },
      { name: 'ITIQUIRA' },
      { name: 'JACIARA' },
      { name: 'JANGADA' },
      { name: 'JAURU' },
      { name: 'JUARA' },
      { name: 'JUINA' },
      { name: 'JURUENA' },
      { name: 'JUSCIMEIRA' },
      { name: 'LAMBARI DOESTE' },
      { name: 'LUCAS DO RIO VERDE' },
      { name: 'LUCIARA' },
      { name: 'MACELANDIA' },
      { name: 'MATUPA' },
      { name: 'MIRASSOL DOESTE' },
      { name: 'NOBRES' },
      { name: 'NORTELANDIA' },
      { name: 'NOSSA SENHORA DO LIVRAMENTO' },
      { name: 'NOVA BANDEIRANTES' },
      { name: 'NOVA BRASILANDIA' },
      { name: 'NOVA CANAA DO NORTE' },
      { name: 'NOVA GUARITA' },
      { name: 'NOVA LACERDA' },
      { name: 'NOVA MARILANDIA' },
      { name: 'NOVA MARINGA' },
      { name: 'NOVA MONTE VERDE' },
      { name: 'NOVA MUTUM' },
      { name: 'NOVA NAZARE' },
      { name: 'NOVA OLIMPIA' },
      { name: 'NOVA SANTA HELENA' },
      { name: 'NOVA UBIRATA' },
      { name: 'NOVA XAVANTINA' },
      { name: 'NOVO HORIZONTE DO NORTE' },
      { name: 'NOVO MUNDO' },
      { name: 'NOVO SANTO ANTONIO' },
      { name: 'NOVO SAO JOAQUIM' },
      { name: 'PARANAITA' },
      { name: 'PEDRA PRETA' },
      { name: 'PEIXOTO DE AZEVEDO' },
      { name: 'PLANALTO DA SERRA' },
      { name: 'POCONE' },
      { name: 'PLANALTO DO ARAGUAIA' },
      { name: 'PEDRA BRANCA' },
      { name: 'PONTES E LACERDA' },
      { name: 'PORTO ALEGRE DO NORTE' },
      { name: 'PORTO DOS GAUCHOS' },
      { name: 'PORTO ESPERIDIAO' },
      { name: 'PORTO ESTRELA' },
      { name: 'POXOREU' },
      { name: 'PRIMAVERA DO LESTE' },
      { name: 'QUERENCIA' },
      { name: 'RESERVA DO CABACAL' },
      { name: 'RIBEIRAO CASCALHEIRA' },
      { name: 'RIBEIRAOZINHO' },
      { name: 'RIO BRANCO' },
      { name: 'RONDOLANDIA' },
      { name: 'RONDONOPOLIS' },
      { name: 'ROSARIO OESTE' },
      { name: 'SALTO DO CEU' },
      { name: 'SANTA CARMEM' },
      { name: 'SANTA CRUZ DO XINGU' },
      { name: 'SANTA RITA DO TRIVELATO' },
      { name: 'SANTA TEREZINHA' },
      { name: 'SANTO AFONSO' },
      { name: 'SANTO ANTONIO DO LESTE' },
      { name: 'SANTO ANTONIO DO LEVERGER' },
      { name: 'SAO FELIX DO ARAGUAIA' },
      { name: 'SAO JOSE DO POVO' },
      { name: 'SAO JOSE DO RIO CLARO' },
      { name: 'SAO JOSE DO XINGU' },
      { name: 'SAO JOSE DOS QUATRO MARCOS' },
      { name: 'SAO PEDRO DA CIPA' },
      { name: 'SAPEZAL' },
      { name: 'SERRA NOVA DOURADA' },
      { name: 'SINOP' },
      { name: 'SORRISO' },
      { name: 'TABAPORA' },
      { name: 'TANGARA DA SERRA' },
      { name: 'TAPURAH' },
      { name: 'TERRA NOVA DO NORTE' },
      { name: 'TESOURO' },
      { name: 'TORIXOREU' },
      { name: 'UNIAO DO SUL' },
      { name: 'VALE DE SAO DOMINGOS' },
      { name: 'VARZEA GRANDE' },
      { name: 'VERA' },
      { name: 'VILA BELA DA SANTISSIMA TRINDADE' },
      { name: 'VILA RICA' },

    ];
    this.selecionarTipos = [
      { name: 'MUNICIPIO' },
      { name: 'UNIDADE JULGADORA' },
      { name: 'TIPO UNIDADE GESTORA' },
      { name: 'CONSELHEIRO' },
    ];
this.aplicService.listarExercicios().subscribe({
      next: (exercicios) => {
        this.Exercicios = exercicios;
      },
      error: (err) => {
        console.error('Erro ao carregar exercícios', err);
      }
    });
  
    this.selectListAno = this.populaSelectListAno();
    this.selectedCategories = [this.categories[0]];
    this.infoRecebidaSelecionadas = [this.InfoRecebidas[0]];
    this.modoSelecionado = this.modos[0];

    this.TipoCargas = [
      { name: 'Contabilidade' },
      { name: 'Folha de Pagamento' },
      { name: 'Contratos' },
      { name: 'Patrimônio' },
    ];
  }
}
