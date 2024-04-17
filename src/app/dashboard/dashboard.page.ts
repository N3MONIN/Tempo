import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  private url = '/dashboard';

  constructor(private HeaderService: HeaderService) {
    
  }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.HeaderService.setPageContent(this.url, 'Dashboard', 'Hola, Juan Carlos. ¡Bienvenido al panel de administración de Tempo!');
  }
}
