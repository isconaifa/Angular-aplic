import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Exercicios } from "../../models/Exercicios";
import { Municipio } from "../../models/Municipios";

@Injectable({ 
    providedIn: 'root' 
})
export class AplicService {
    
    private BaseUrl = 'http://localhost:5000/aplic';
    constructor(private http: HttpClient) { }

    listarExercicios() :Observable<Exercicios[]> {
        return this.http.get<Exercicios[]>(this.BaseUrl + '/exercicios');
    }

  listarMuncipios(ano: number): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(`${this.BaseUrl}/municipios?anoExercicio/${ano}`);
  }
}


