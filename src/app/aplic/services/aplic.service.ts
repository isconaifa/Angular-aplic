import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Exercicios } from "../../models/Exercicios";

@Injectable({ 
    providedIn: 'root' 
})
export class AplicService {
    
    private BaseUrl = 'http://localhost:5000/aplic';
    constructor(private http: HttpClient) { }

    listarExercicios() :Observable<Exercicios[]> {
        return this.http.get<Exercicios[]>(this.BaseUrl + '/exercicios');
    }
}


