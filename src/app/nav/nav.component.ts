import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchPhrase = "";
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 480) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  constructor() { }

  ngOnInit(): void {}

  public search(): void {
    if (!this.searchPhrase) return;

    console.log("search phrase: ", this.searchPhrase);
  }
}
