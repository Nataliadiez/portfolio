import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Nav } from '../nav/nav';

type SectionId = 'inicio' | 'sobre-mi' | 'proyectos' | 'tecnologias' | 'contacto';

@Component({
  selector: 'app-header',
  imports: [Nav],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  isMobileMenuOpen = false;
  activeSection: SectionId = 'inicio';

  private readonly sectionIds: SectionId[] = ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'contacto'];

  ngAfterViewInit(): void {
    queueMicrotask(() => this.updateActiveSection());
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  goToSection(sectionId: SectionId): void {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `#${sectionId}`);

    this.activeSection = sectionId;
    this.closeMobileMenu();
  }

  private updateActiveSection(): void {
    const headerOffset = 130;
    const currentPosition = window.scrollY + headerOffset;

    let currentSection: SectionId = 'inicio';

    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);

      if (!section) {
        continue;
      }

      if (section.offsetTop <= currentPosition) {
        currentSection = sectionId;
      }
    }

    this.activeSection = currentSection;
  }
}
