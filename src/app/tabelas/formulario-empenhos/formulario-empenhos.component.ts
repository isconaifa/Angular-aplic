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
  ],
  templateUrl: './formulario-empenhos.component.html',
  styleUrl: './formulario-empenhos.component.css',
})
export default class FormularioEmpenhosComponent implements OnInit {
  checked: boolean = false;
  value1: string | undefined;
  value2: string | undefined;
  cities: City[] | undefined;
  pizza: string[] = [];

  selectedCity: City | undefined;

  date1: Date | undefined;

  date2: Date | undefined;

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
