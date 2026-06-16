import { Component } from '@angular/core';

type Technology = {
  name: string;
  description: string;
  category: string;
  color: string;
  icon: string;
};

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.scss',
})
export class Tecnologias {
  technologies: Technology[] = [
    {
      name: 'Supabase',
      description: 'Auth, base de datos y servicios para construir backends ágiles.',
      category: 'Backend as a Service',
      color: '#3ecf8e',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/supabase_dxvsgv.png',
    },
    {
      name: 'MongoDB',
      description: 'Base de datos flexible para estructuras dinámicas y escalables.',
      category: 'Base de datos NoSQL',
      color: '#13aa52',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/mongo_f7nem7.png',
    },
    {
      name: 'Angular',
      description: 'Lo uso para interfaces administrativas y paneles funcionales.',
      category: 'Frontend framework',
      color: '#dd0031',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/angular_wrvmrb.png',
    },
    {
      name: 'NestJS',
      description: 'Framework backend ideal para APIs organizadas y mantenibles.',
      category: 'Backend framework',
      color: '#e0234e',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/nest_thsafo.png',
    },
    {
      name: 'SQL',
      description: 'Consultas, relaciones y modelado de datos para sistemas estructurados.',
      category: 'Bases de datos relacionales',
      color: '#2f80ed',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/sql_bboyaj.png',
    },
    {
      name: 'Ionic',
      description: 'Apps híbridas con una sola base de código.',
      category: 'Apps multiplataforma',
      color: '#3880ff',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/ionic_cs6sx5.png',
    },
    {
      name: 'Express',
      description: 'Servidor liviano para APIs y servicios web.',
      category: 'Node.js framework',
      color: '#444444',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648027/express_fiua4j.png',
    },
    {
      name: 'Docker',
      description:
        'Contenedores para empaquetar, ejecutar y desplegar servicios de forma consistente.',
      category: 'Contenedores / DevOps',
      color: '#2496ed',
      icon: 'https://res.cloudinary.com/dnwhbnsdi/image/upload/v1781648151/docker-icon_dfmx2o.png',
    },
  ];
}
