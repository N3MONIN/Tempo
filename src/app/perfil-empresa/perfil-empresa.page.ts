import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.page.html',
  styleUrls: ['./perfil-empresa.page.scss'],
})
export class PerfilEmpresaPage implements OnInit {

  private url = '/perfil-empresa';

  constructor(private HeaderService: HeaderService) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Perfil Empresa', 'Perfil Empresa');
  }

}
