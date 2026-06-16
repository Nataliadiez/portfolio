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
      value: 'nataliajorgelinadiez@gmail.com',
      href: 'mailto:nataliajorgelinadiez@gmail.com',
      icon: '✉',
    },
    {
      label: 'GitHub',
      value: 'github.com/Nataliadiez',
      href: 'https://github.com/Nataliadiez',
      icon: '●',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/natt-diez',
      href: 'https://www.linkedin.com/in/natalia-diez-925488206/',
      icon: 'in',
    },
    {
      label: 'Ubicación',
      value: 'Buenos Aires, Argentina (UTC -3)',
      icon: '⌖',
    },
  ];
}
