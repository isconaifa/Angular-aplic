import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppStateService {
  exercicioSelecionado?: number;
  unidadeGestoraSelecionada?: number;
}
