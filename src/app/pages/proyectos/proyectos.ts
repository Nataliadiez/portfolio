import { Component } from '@angular/core';

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  accent: 'pink' | 'orange' | 'teal';
  preview: 'almicida' | 'cg' | 'dashboard';
  code: string;
};

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {
  readonly projects: Project[] = [
    {
      title: 'Almicida',
      category: 'Plataforma web',
      description: 'Plataforma para gestión de servicios de control de plagas, clientes y reportes técnicos.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'TailwindCSS'],
      link: '#',
      accent: 'pink',
      preview: 'almicida',
      code: '01',
    },
    {
      title: 'CG Producciones',
      category: 'Sitio institucional',
      description: 'Sitio moderno para una productora de eventos, con foco en presentación visual y performance.',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
      link: '#',
      accent: 'orange',
      preview: 'cg',
      code: '02',
    },
    {
      title: 'Control de Operaciones',
      category: 'Dashboard web',
      description: 'Dashboard para monitoreo de operaciones en tiempo real con métricas, alertas y reportes.',
      tags: ['Angular', 'NestJS', 'MongoDB', 'Socket.io'],
      link: '#',
      accent: 'teal',
      preview: 'dashboard',
      code: '03',
    },
  ];
}
