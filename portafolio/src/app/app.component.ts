import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { ExperienciaLaboralComponent } from "./experiencia-laboral/experiencia-laboral.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PresentationComponent, ExperienciaLaboralComponent, ProyectosComponent, SobreMiComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <- corregido aquí también
})
export class AppComponent {
  title = 'portafolio';

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
