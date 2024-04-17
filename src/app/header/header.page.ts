import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;
  subtitle: string;
  companyName: string = '404 Programación, S.L.'; 
  employeeName: string = 'Juan Carlos Roa'; 
  employeeAvatar: string = 'assets/img/avatar-usuario-404.png'; 


  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const content = this.headerService.getPageContent(url);
        this.title = content.title;
        this.subtitle = content.subtitle;
      }
    });
  }
}
