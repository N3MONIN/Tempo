import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private appPages = [    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Empleados', url: '/empleados', icon: 'calendar' },
    { title: 'Calendario Laboral', url: '/calendario-laboral', icon: 'calendar' },
    { title: 'Informes', url: '/informes', icon: 'calendar' },
    { title: 'Incidencias', url: '/incidencias', icon: 'alert' },
    { title: 'Solicitudes', url: '/solicitudes', icon: 'calendar' },
    { title: 'Perfil Empresa', url: '/perfil-empresa', icon: 'calendar' },
    { title: 'Configuración', url: '/configuracion', icon: 'calendar' },
  ];

  constructor() {}

  getAppPages() {
    return this.appPages;
  }
}
