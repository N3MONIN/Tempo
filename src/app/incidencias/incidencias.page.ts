import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {
  private url = '/incidencias';

  constructor(private HeaderService: HeaderService) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Incidencias', 'Incidencias de Empleados');
  }

}
