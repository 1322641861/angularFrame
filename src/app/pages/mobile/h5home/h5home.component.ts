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
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 1, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 2, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 3, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 4, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 5, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 6, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 7, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 8, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 9, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
        {issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 10, src: '//player.alicdn.com/video/aliyunmedia.mp4'},
      ];
    }, 1000);
  }
}
