import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidebar2',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar2.component.html',
  styleUrl: './sidebar2.component.css'
})
export class Sidebar2Component implements OnInit {
  @Input() sideNavStatus: boolean = false;
list = [
    {
    number: '1',
    name: 'Selecionar Unidade \n Gestora',
    icon: 'bi bi-house-door',
    route: 'unidade-gestora'
  },
  {
    number: '2',
    name: 'Relatórios Gerenciais',
    icon: 'lni lni-buildings-1',
    route: 'relatorios'
  },
  {
    number: '3',
    name: 'Consulta aos Envios\n das UGs',
    icon: 'bi bi-database-fill',
    route: 'consultas'
  },
  {
    number: '4',
    name: 'Quantidade de \n Reenvios por UG',
    icon: 'bi bi-grid-3x3-gap',
    route: 'quantidades'
  },
  {
    number: '5',
    name: 'Sugestões',
    icon: 'bi bi-stripe',
    route: 'sugestoes'
  },
];

getNomeComQuebra(item: any): string {
  return item.name.replace(/\n/g, '<br>');
}
 
  constructor() { }

  ngOnInit(): void {}

}
