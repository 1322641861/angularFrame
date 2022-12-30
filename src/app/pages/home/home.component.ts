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
  lotteryHistory: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getBannerList();
    this.getHistoryList();
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

  getHistoryList() {
    setTimeout(() => {
      this.lotteryHistory = [
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11},
      ];
    }, 1000);
    
  }
}
