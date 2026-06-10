import { Component } from '@angular/core';

type ContactInfo = {
  label: string;
  value: string;
  href?: string;
  icon: string;
};

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  readonly contactInfo: ContactInfo[] = [
    {
      label: 'Email',
      value: 'hola@natt.dev',
      href: 'mailto:hola@natt.dev',
      icon: '✉',
    },
    {
      label: 'GitHub',
      value: 'github.com/natt-diez',
      href: 'https://github.com/natt-diez',
      icon: '●',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/natt-diez',
      href: 'https://linkedin.com/in/natt-diez',
      icon: 'in',
    },
    {
      label: 'Ubicación',
      value: 'Buenos Aires, Argentina (UTC -3)',
      icon: '⌖',
    },
  ];
}
