import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-calendario-laboral',
  templateUrl: './calendario-laboral.page.html',
  styleUrls: ['./calendario-laboral.page.scss'],
})
export class CalendarioLaboralPage implements OnInit {

  
  private url = '/calendario-laboral';

  constructor(private HeaderService: HeaderService) {
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Calendario Laboral', 'Calendario Laboral Empleados');
  }



}
