import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  private exercicioSelecionadoSubject = new BehaviorSubject<number | null>(null);
  private unidadeGestoraSelecionadaSubject = new BehaviorSubject<number | null>(null);

  exercicioSelecionado$ = this.exercicioSelecionadoSubject.asObservable();
  unidadeGestoraSelecionada$ = this.unidadeGestoraSelecionadaSubject.asObservable();

  setExercicioSelecionado(exercicio: number | null) {
    sessionStorage.setItem('exercicioSelecionado', String(exercicio));
    this.exercicioSelecionadoSubject.next(exercicio);
  }

  setUnidadeGestoraSelecionada(codigo: number | null) {
    sessionStorage.setItem('unidadeGestoraSelecionada', String(codigo));
    this.unidadeGestoraSelecionadaSubject.next(codigo);
  }
}
