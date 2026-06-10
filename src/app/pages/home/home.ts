import { Component } from '@angular/core';
import { Tecnologias } from '../tecnologias/tecnologias';
import { Contacto } from '../contacto/contacto';
import { Proyectos } from '../proyectos/proyectos';

@Component({
  selector: 'app-home',
  imports: [Tecnologias, Contacto, Proyectos],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
