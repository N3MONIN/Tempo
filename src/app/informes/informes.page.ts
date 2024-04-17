import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {
  private url = '/informes';

  constructor(private HeaderService: HeaderService) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Informes', 'Informes de Empleados');
  }
}
