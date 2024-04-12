import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private menuService: MenuService) {}

  getAppPages() {
    return this.menuService.getAppPages();
  }
}
