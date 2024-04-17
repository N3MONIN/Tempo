import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  private url = '/empleados';

  constructor(private HeaderService: HeaderService) {
  }
  ngOnInit() {
  }


ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Configuración', 'Configuración Página');
  }
}
