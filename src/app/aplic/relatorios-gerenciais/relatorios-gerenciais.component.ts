import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { SelectModule } from 'primeng/select';
import { SelectListAno } from '../../models/SelectListAno';
import { RadioButton } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AplicService } from '../services/aplic.service';
import { Exercicios } from '../../models/Exercicios';


interface Consel {
  name: string;

}

interface municipio {
  name: string;
}

interface UnindadeGestora {
  name: string;
}

interface TipoCarga {
  name: string;
}

// interface Exercicio {
//   ano : number
// }

interface Competencia {
  mes: string
}



@Component({
  selector: 'app-relatorios-gerenciais',
  imports: [ FieldsetModule, FormsModule, SelectModule, RadioButton, PanelModule, ButtonModule],
  templateUrl: './relatorios-gerenciais.component.html',
  styleUrl: './relatorios-gerenciais.component.css'
})
export default class RelatoriosGerenciaisComponent implements OnInit {
constructor(private aplicService: AplicService) { }
ugs!: string;
  tipoRelatorio!: string;

 Exercicios: { exercicio: number }[] = [];
exercicioSelecionado: { exercicio: number } | null = null;


  conselheiros: Consel[] | undefined;
  conselheiroSelecionado: Consel | undefined;

  municipios: municipio[] | undefined;
  municipioSelecionado: municipio | undefined;

  UnindadeGestoras: UnindadeGestora[] | undefined;
  UnindadeGestoraSelecionada: UnindadeGestora | undefined;

  TipoCargas: TipoCarga[] | undefined;
  TipoCargaSelecionada: TipoCarga | undefined;



  Competencias: Competencia[] | undefined;
  CompetenciaSelecionada: Competencia | undefined;



  public populaSelectListAno(): SelectListAno[] {
    const anoAtual = new Date().getFullYear();
    const arrayAno: SelectListAno[] = [];

    for (let i = 2009; i <= anoAtual; i++) {
      arrayAno.push(new SelectListAno({
        anoNum: i,
        anoDesc: i.toString()
      }));
    }

    return arrayAno;
  }
  ngOnInit() {
       


  
    

    this.conselheiros = [
      { name: 'ANTÓNIO JOAQUIM' },
      { name: 'CAMPOS NETO' },
      { name: 'GUILHERME ANTÓNIO MALUF' },
      { name: 'ISAIAS LOPES NOVELLI' },
      { name: 'LUIZ HENRIQUE LIMA' },
    ];

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

    this.Competencias = [
      { mes: 'JANEIRO' },
      { mes: 'FEVEREIRO' },
      { mes: 'MARCO' },
      { mes: 'ABRIL' },
      { mes: 'MAIO' },
      { mes: 'JUNHO' },
      { mes: 'JULHO' },
      { mes: 'AGOSTO' },
      { mes: 'SETEMBRO' },
      { mes: 'OUTUBRO' },
      { mes: 'NOVEMBRO' },
      { mes: 'DEZEMBRO' },
    ]

    this.TipoCargas = [
      { name: 'Contabilidade Pública' },
      { name: 'Folha de Pagamento' },
      { name: 'Patrimônio e Administrativo' },
      { name: 'Contratos e Convenios' },
    ];
  
  }

}
