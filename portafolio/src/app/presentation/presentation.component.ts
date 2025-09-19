import { Component } from '@angular/core';
import { ModoOscuroService } from '../services/modo-oscuro.service';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {

  constructor(public modoOscuroService: ModoOscuroService) {}
  
  toggleModo() {
    this.modoOscuroService.toggleModo();
  }
  
  get modoOscuro(): boolean {
    return this.modoOscuroService.modoOscuro;
  }

}
