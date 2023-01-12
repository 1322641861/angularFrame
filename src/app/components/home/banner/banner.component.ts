import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnChanges {
  @Input() defaultBanners: any[] = [];
  @Input() smallBanners: any[] = [];
  scrollBanners: any[] = [];
  dotIndex = 0;
  carousel: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 轮播图侧边栏 制作循环滚动效果
    if (this.smallBanners.length) {
      this.scrollBanners = [...this.smallBanners];
      this.scrollBanners.map((item: any) => item.selected = false);
      this.scrollBanners[0].selected = true;
      this.scrollBanners = this.scrollBanners.concat(this.scrollBanners);
    }
  }

  goToCarousel(carousel: any, index: number) {
    const spare = index % 3;
    carousel.goTo(spare);
    this.scrollBanners.forEach((item: any, i: number) => {
      if (i % 3 === spare) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
  }

  show(index: number) {
    this.dotIndex = index;
  }

}
