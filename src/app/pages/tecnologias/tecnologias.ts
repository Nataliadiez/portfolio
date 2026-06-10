import { Component } from '@angular/core';

type Technology = {
  name: string;
  description: string;
  symbol: string;
  color: string;
};

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.scss',
})
export class Tecnologias {
  readonly technologies: Technology[] = [
    { name: 'Angular', description: 'Frontend Framework', symbol: 'A', color: '#dd3446' },
    { name: 'NestJS', description: 'Backend Framework', symbol: 'N', color: '#d64d80' },
    { name: 'TypeScript', description: 'Lenguaje Tipado', symbol: 'TS', color: '#2878c6' },
    { name: 'MongoDB', description: 'Base de datos NoSQL', symbol: 'M', color: '#2e9d4a' },
    { name: 'PostgreSQL', description: 'Base de datos Relacional', symbol: 'PG', color: '#336791' },
    { name: 'Docker', description: 'Contenedores y DevOps', symbol: 'D', color: '#2496ed' },
    { name: 'Git', description: 'Control de Versiones', symbol: 'G', color: '#ef5a24' },
    { name: 'Tailwind CSS', description: 'UI Utility-First', symbol: 'TW', color: '#2fb8ac' },
  ];
}
