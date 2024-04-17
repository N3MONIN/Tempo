import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private appPages = [    { title: 'Dashboard', url: '/dashboard', icon: '/assets/icons/icon-dashboard.svg' },
    { title: 'Empleados', url: '/empleados', icon: '/assets/icons/icon-empleados.svg' },
    { title: 'Calendario Laboral', url: '/calendario-laboral', icon: '/assets/icons/icon-calendario.svg' },
    { title: 'Informes', url: '/informes', icon: '/assets/icons/icon-informes.svg' },
    { title: 'Incidencias', url: '/incidencias', icon: '/assets/icons/icon-incidencias.svg' },
    { title: 'Solicitudes', url: '/solicitudes', icon: '/assets/icons/icon-solicitudes.svg' },
    { title: 'Perfil Empresa', url: '/perfil-empresa', icon: '/assets/icons/icon-perfildeempresa.svg' },
    { title: 'Configuración', url: '/configuracion', icon: '/assets/icons/icon-configuracion.svg' },
  ];

  constructor() {}

  getAppPages() {
    return this.appPages;
  }
}
