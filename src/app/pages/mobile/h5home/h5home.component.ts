import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h5home',
  templateUrl: './h5home.component.html',
  styleUrls: ['./h5home.component.scss']
})
export class H5homeComponent implements OnInit {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '3.63rem', // 134.2px
  };
  lotteryHistory: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getHistoryList();
  }
  beforeChange(event: any) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event: any) {
    console.log('slide to ' + event);
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
