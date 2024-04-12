import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  private pageTitle: string = "Calendario Laboral";
  private pageSubtitle: string = "Calendario Laboral Empleados";

  constructor() { }

  getPageTitle(): string {
    return this.pageTitle;
  }

  setPageTitle(title: string): void {
    this.pageTitle = title;
  }

  getPageSubtitle(): string {
    return this.pageSubtitle;
  }

  setPageSubtitle(subtitle: string): void {
    this.pageSubtitle = subtitle;
  }
}
