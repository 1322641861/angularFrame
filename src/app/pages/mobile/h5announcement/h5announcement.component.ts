import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h5announcement',
  templateUrl: './h5announcement.component.html',
  styleUrls: ['./h5announcement.component.scss']
})
export class H5announcementComponent implements OnInit {
  lotteryHistory: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getHistoryList();
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

  searchEvent(issueNo: any) {
    console.log(issueNo);
    
  }

}
