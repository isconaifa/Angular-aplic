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
import { Exercicios } from '../../models/Exercicios';
import { Municipio } from '../../models/Municipios';
import { UnidadeGestora } from '../../models/UnidadeGestora';
import { SelecionarTipo } from '../../models/SelecionarTipo';
import { TipoCarga } from '../../models/TipoCarga';





interface municipio {
  name: string;
}
// interface TipoCarga {
//   name: string;
// }

interface municipio {
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
 // municipios: municipio[] | undefined;
  //municipioSelecionado: municipio | undefined;

 exercicios: Exercicios[] = [];
 municipios: Municipio[] = [];
 unidadesGestoras: UnidadeGestora[] = [];

 tiposDeCarga: TipoCarga[] = [];
tipoDeCargaSelecionado!: TipoCarga;

  exercicioSelecionado!: Exercicios;
  municipioSelecionado!: Municipio;
  unidadeGestoraSelecionada!: UnidadeGestora;

 
 selecionarTipos: SelecionarTipo[] = [
  { name: 'Conselheiro', value: 'conselheiro' },
  { name: 'Município', value: 'municipio' },
  { name: 'Unidade Julgadora', value: 'unidade_julgadora' },
  { name: 'Tipo Unidade Gestora', value: 'tipo_unidade_gestora' }
];

selecionarTiposSelecionado!: SelecionarTipo;

  constructor(private aplicService: AplicService) { }

//Exercicios: { exercicio: number }[] = [];
//exercicioSelecionado: { exercicio: number } | null = null;


 


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


  

 
  ngOnInit(): void {
 this.aplicService.getExercicios().subscribe(data => {
      this.exercicios = data;
    });

    this.aplicService.getTiposDeCarga().subscribe(data => {
      this.tiposDeCarga = data;
    });

  
  }

  buscarMunicipios(): void {
    const ano = this.exercicioSelecionado?.exercicio;
    if (ano) {
      this.aplicService.getMunicipios(ano).subscribe(data => {
        this.municipios = data;
        this.municipioSelecionado = new Municipio();
        this.unidadesGestoras = [];
      });
    }
  }

  buscarUnidadesGestoras(): void {
    const codigo = this.municipioSelecionado?.codigo;
    if (codigo) {
      this.aplicService.getUnidadesGestoras(codigo).subscribe(data => {
        this.unidadesGestoras = data;
        this.unidadeGestoraSelecionada = new UnidadeGestora();
      });
    }
  }
}

    /*
    SELECT DISTINCT 
  v.ent_codigo AS codigo,
  v.ent_nome   AS nome,
  c.nome_conselheiro AS conselheiro
FROM 
  vw_entidade_aplic v
JOIN 
  publico.distribuicao_relator d ON d.cnpj_cpf_cod_tce_entidade = v.ent_codigo
JOIN 
  controlp.conselheiro c ON d.cod_conselheiro = c.cod_conselheiro
WHERE 
  v.mun_codigo = '510340'
  AND d.ano_relatoria = '2025'
ORDER BY 
  v.ent_nome;
    */
  
