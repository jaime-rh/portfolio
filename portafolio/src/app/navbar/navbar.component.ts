import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { ModoOscuroService } from '../services/modo-oscuro.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() scrollTo = new EventEmitter<string>();

  isScrolled = false; // Controla si ya scrolleaste

  constructor(public modoOscuroService: ModoOscuroService) {}

  toggleModo() {
    this.modoOscuroService.toggleModo();
  }

  get modoOscuro(): boolean {
    return this.modoOscuroService.modoOscuro;
  }

  emitScrollTo(sectionId: string): void {
    this.scrollTo.emit(sectionId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Cambia a true si scrollY > 50px
  }
}
