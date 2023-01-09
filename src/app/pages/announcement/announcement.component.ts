import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  lotteryHistory: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getHistoryList();
  }
  // 监听搜索组件的输入值
  search(event: any){
    console.log('开奖公告');
    console.log(event);
  }
  getHistoryList() {
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
  }

}
