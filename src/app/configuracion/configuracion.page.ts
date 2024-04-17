import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  private url = '/configuracion';

  constructor(private HeaderService: HeaderService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Configuración', 'Configuración Página');
  }

}
