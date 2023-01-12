import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-h5-nav-tab',
  templateUrl: './h5-nav-tab.component.html',
  styleUrls: ['./h5-nav-tab.component.scss']
})
export class H5NavTabComponent implements OnInit {
  sideOpen = false;
  constructor() { }

  ngOnInit(): void {

  }

  openSidebarFn() {
    this.sideOpen = !this.sideOpen;
  }

  openSidebar(event: boolean) {
    this.sideOpen = event;
  }

}
