// src/app/services/modo-oscuro.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModoOscuroService {
  private modoOscuroSubject = new BehaviorSubject<boolean>(false);
  modoOscuro$ = this.modoOscuroSubject.asObservable();

  toggleModo() {
    const nuevoEstado = !this.modoOscuroSubject.value;
    this.modoOscuroSubject.next(nuevoEstado);

    // Aplicar o quitar clase al <body>
    const body = document.body;
    if (nuevoEstado) {
      body.classList.add('modo-oscuro');
    } else {
      body.classList.remove('modo-oscuro');
    }
  }

  get modoOscuro(): boolean {
    return this.modoOscuroSubject.value;
  }
}
