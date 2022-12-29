import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() defaultBanners: any[] = [];
  @Input() smallBanners: any[] = [];
  dotIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  show(index: number) {
    this.dotIndex = index;
  }

}
