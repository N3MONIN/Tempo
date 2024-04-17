import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private pageContents: { [url: string]: { title: string, subtitle: string } } = {};

  constructor() { }

  setPageContent(url: string, title: string, subtitle: string): void {
    this.pageContents[url] = { title, subtitle };
  }

  getPageContent(url: string): { title: string, subtitle: string } {
    return this.pageContents[url] || { title: '', subtitle: '' };
  }
}
