import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Exercicios } from "../../models/Exercicios";
import { Municipio } from "../../models/Municipios";
import { UnidadeGestora } from "../../models/UnidadeGestora";
import { TipoCarga } from "../../models/TipoCarga";
import { Empenho } from "../../models/Empenho";


@Injectable({ 
    providedIn: 'root' 
})
export class AplicService {
    
    private baseUrl = 'http://localhost:5000/aplic';
    constructor(private http: HttpClient) { }
 getExercicios(): Observable<Exercicios[]> {
  return this.http.get<Exercicios[]>(`${this.baseUrl}/exercicios`);
}

getMunicipios(anoExercicio: number): Observable<Municipio[]> {
  return this.http.get<Municipio[]>(`${this.baseUrl}/municipios`, {
    params: { anoExercicio }
  });
}

getUnidadesGestoras(munCodigo: number, ano: number): Observable<UnidadeGestora[]> {
  return this.http.get<UnidadeGestora[]>(`${this.baseUrl}/unidades-gestoras`, {
    params: {
      mun_codigo: munCodigo,
      ano: ano
    }
  });

}

getEmpenhos(unidadeGestoraCodigo: number, ano: number): Observable<Empenho[]> {
  return this.http.get<Empenho[]>(`${this.baseUrl}/consultas-empenhos`, {
    params: { unidadeGestoraCodigo, ano }
  });
}





getTiposDeCarga(): Observable<TipoCarga[]> {
  return this.http.get<TipoCarga[]>(`${this.baseUrl}/tipos-de-carga`);
}

}


