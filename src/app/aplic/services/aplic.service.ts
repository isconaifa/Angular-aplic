import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Exercicios } from "../../models/Exercicios";
import { Municipio } from "../../models/Municipios";
import { UnidadeGestora } from "../../models/UnidadeGestora";
import { TipoCarga } from "../../models/TipoCarga";
import { Empenho } from "../../models/Empenho";
import { Credor } from "../../models/Credor";
import { DetalheFonte } from "../../models/DetalheFonte";
import { Orgao } from "../../models/Orgao";
import { GrupoFonte } from "../../models/GrupoFonte";
import { Programa } from "../../models/Programa";
import { Funcao } from "../../models/Funcao";
import { Acao } from "../../models/Acao";
import { FonteDestinoRecurso } from "../../models/FonteDestinoRecurso";
import { Subfuncao } from "../../models/subfuncao";
import { UnidadeOrcamentaria } from "../../models/UnidadeOrcamentaria";
import { HttpParams } from '@angular/common/http';


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

getDetalheFonte(ano: number): Observable<DetalheFonte[]> {
  const params = new HttpParams()
    .set('ano', ano.toString());
  return this.http.get<DetalheFonte[]>(`${this.baseUrl}/detalhe-fonte`, { params });
}

getOrgao(unidadeGestoraCodigo: number, ano: number): Observable<Orgao[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString());
  return this.http.get<Orgao[]>(`${this.baseUrl}/orgaos`, { params });

}

getGrupoFonte(ano : number): Observable<GrupoFonte[]> {
  const params = new HttpParams()
    .set('ano', ano.toString());
  return this.http.get<GrupoFonte[]>(`${this.baseUrl}/grupo-fonte`, { params });
}

getPrograma(unidadeGestoraCodigo: number, ano: number, codigoFuncao: number): Observable<Programa[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString())
    .set('codigoFuncao', codigoFuncao.toString());
  return this.http.get<Programa[]>(`${this.baseUrl}/programas`, { params });
}

getFuncao(unidadeGestoraCodigo: number, ano: number): Observable<Funcao[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString());
  return this.http.get<Funcao[]>(`${this.baseUrl}/funcoes`, { params });
}

getSubfuncao(unidadeGestoraCodigo: number, ano: number, codigoFuncao: number): Observable<Subfuncao[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString())
    .set('codigoFuncao', codigoFuncao.toString());
  return this.http.get<Subfuncao[]>(`${this.baseUrl}/subfuncoes`, { params });
}

getUnidadeOrcamentaria(unidadeGestoraCodigo: number, ano : number, codigoOrgao: number): Observable<UnidadeOrcamentaria[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString())
    .set('codigoOrgao', codigoOrgao.toString());
  return this.http.get<UnidadeOrcamentaria[]>(`${this.baseUrl}/unidades-orcamentarias`, { params });
}

getAcao(unidadeGestoraCodigo: number, ano: number): Observable<Acao[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString());
  return this.http.get<Acao[]>(`${this.baseUrl}/acoes`, { params });
}

getFonteDestinoRecurso(unidadeGestoraCodigo: number, ano: number): Observable<FonteDestinoRecurso[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString());
  return this.http.get<FonteDestinoRecurso[]>(`${this.baseUrl}/fontes-destinacao-recurso`, { params });
}

getEmpenhos(unidadeGestoraCodigo: number, ano: number): Observable<Empenho[]> {
  const params = new HttpParams()
    .set('unidadeGestoraCodigo', unidadeGestoraCodigo.toString())
    .set('ano', ano.toString());

  return this.http.get<Empenho[]>(`${this.baseUrl}/consultas-empenhos`, { params });
}

getCredores(unidadeGestoraCodigo: number): Observable<Credor[]> {
  return this.http.get<Credor[]>(`${this.baseUrl}/cadastro-geral`,
    {
    params: {
      unidadeGestoraCodigo: unidadeGestoraCodigo
    }
  });
}

getTiposDeCarga(): Observable<TipoCarga[]> {
  return this.http.get<TipoCarga[]>(`${this.baseUrl}/tipos-de-carga`);
}
}


