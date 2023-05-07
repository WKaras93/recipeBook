import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchPhrase = "";
  isMobile = false;
  shouldDisplayInput = false;
  MOBILE_WIDTH = 480;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= this.MOBILE_WIDTH) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.shouldDisplayInput = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= this.MOBILE_WIDTH;
  }

  public search(): void {
    if (!this.searchPhrase) return;

    console.log("search phrase: ", this.searchPhrase);
  }

  public onMobileSearch(): void {
    this.shouldDisplayInput = true;
  }
}
