import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  pageTitle: string = '';
  pageSubtitle: string = '';
  companyName: string = '404 Programación, S.L.'; 
  employeeName: string = 'Juan Carlos Roa'; 
  employeeAvatar: string = 'assets/img/avatar-usuario-404.png'; 

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.setPageTitle(currentRoute);
      }
    });
  }

  setPageTitle(route: string) {
    switch (route) {
      case '/dashboard':
        this.pageTitle = 'Dashboard';
        this.pageSubtitle = 'Hola, Juan Carlos. ¡Bienvenido al panel de administración de Tempo!';
        break;
      case '/empleados':
        this.pageTitle = 'Empleados';
        this.pageSubtitle = 'Listado de los empleados de tu empresa. Añade, edita y exporta. ';
        break;
      case '/calendario-laboral':
        this.pageTitle = 'Calendario Laboral';
        this.pageSubtitle = 'Calendario laboral de los empleados';
        break;
      case '/informes':
        this.pageTitle = 'Informes';
        this.pageSubtitle = 'Informes de los empleados';
        break;
      case '/incidencias':
        this.pageTitle = 'Incidencias';
        this.pageSubtitle = 'Incidencias de los empleados';
        break;
      case '/solicitudes':
        this.pageTitle = 'Solicitudes';
        this.pageSubtitle = 'Solicitudes de los empleados';
        break;
      case '/perfil-empresa':
        this.pageTitle = 'Perfil Empresa';
        this.pageSubtitle = 'Perfil de la empresa 404 Programación';
        break;
      case '/configuracion':
        this.pageTitle = 'Configuración';
        this.pageSubtitle = 'Configuracion de la página';
        break;
     
    }
  }
}
