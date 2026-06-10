import { Component, EventEmitter, Input, Output } from '@angular/core';

type SectionId = 'inicio' | 'sobre-mi' | 'proyectos' | 'tecnologias' | 'contacto';
type NavIcon = 'home' | 'target' | 'project' | 'tech' | 'contact';

type NavItem = {
  label: string;
  sectionId: SectionId;
  icon: NavIcon;
};

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  @Input({ required: true }) activeSection!: SectionId;
  @Output() sectionSelected = new EventEmitter<SectionId>();

  readonly items: NavItem[] = [
    {
      label: 'Inicio',
      sectionId: 'inicio',
      icon: 'home',
    },
    {
      label: 'Sobre mí',
      sectionId: 'sobre-mi',
      icon: 'target',
    },
    {
      label: 'Proyectos',
      sectionId: 'proyectos',
      icon: 'project',
    },
    {
      label: 'Tecnologías',
      sectionId: 'tecnologias',
      icon: 'tech',
    },
    {
      label: 'Contacto',
      sectionId: 'contacto',
      icon: 'contact',
    },
  ];

  selectSection(sectionId: SectionId): void {
    this.sectionSelected.emit(sectionId);
  }
}
