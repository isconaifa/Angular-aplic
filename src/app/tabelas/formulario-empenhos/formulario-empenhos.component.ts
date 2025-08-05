import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { RouterModule } from '@angular/router';
import { Dialog } from 'primeng/dialog';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-formulario-empenhos',
  imports: [
    FormsModule,
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



  cities: City[] | undefined;
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

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
}
