import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  appPages: { title: string,  url: string, icon: string, }[];

  constructor(private menuService: MenuService) {
    this.appPages = this.menuService.getAppPages();
  }
  ngOnInit() {
  }

}
