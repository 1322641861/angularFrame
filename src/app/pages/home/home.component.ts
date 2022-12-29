import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannerData: any = {};
  defaultBanners: any[] = [];
  smallBanners: any[] = [];
  dotIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getBannerList();
  }

  show(index: any){
    console.log('当前为:' + index);
    this.dotIndex = index;
  }

  getBannerList() {
    setTimeout(() => {
      this.defaultBanners = [
        {img: 'assets/images/banner/img_1.jpg'},
        {img: 'assets/images/banner/img_2.jpg'},
        {img: 'assets/images/banner/img_3.jpg'},
      ];
      this.smallBanners = [
        {img: 'assets/images/banner/s_img_1.jpg'},
        {img: 'assets/images/banner/s_img_2.jpg'},
        {img: 'assets/images/banner/s_img_3.jpg'},
      ]
    }, 1000);
  }
}
