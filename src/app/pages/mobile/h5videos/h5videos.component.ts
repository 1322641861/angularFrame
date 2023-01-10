import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var Aliplayer: any;
@Component({
  selector: 'app-h5videos',
  templateUrl: './h5videos.component.html',
  styleUrls: ['./h5videos.component.scss']
})
export class H5videosComponent implements OnInit, AfterViewInit {
  videoSrc = '//player.alicdn.com/video/aliyunmedia.mp4';
  poster = 'assets/images/background/play_bg.jpg';
  videoList: any[] = [];
  openModal = false;
  constructor() { }

  ngOnInit(): void {
    this.getVideoList();
  }

  ngAfterViewInit(): void {
  }

  searchEvent(issueNo: any) {
    console.log(issueNo);
  }
  changeModal() {
    this.openModal = !this.openModal;
  }

  getVideoList() {
    this.videoList = [
      {
        id: 1,
        issue: '2022353',
        poster: 'assets/images/background/play_bg.jpg',
        src: '//player.alicdn.com/video/aliyunmedia.mp4'
      },
      {
        id: 2,
        issue: '2022353',
        poster: 'assets/images/background/play_bg.jpg',
        src: '//player.alicdn.com/video/aliyunmedia.mp4'
      },
      {
        id: 3,
        issue: '2022353',
        poster: 'assets/images/background/play_bg.jpg',
        src: '//player.alicdn.com/video/aliyunmedia.mp4'
      },
      {
        id: 4,
        issue: '2022353',
        poster: 'assets/images/background/play_bg.jpg',
        src: '//player.alicdn.com/video/aliyunmedia.mp4'
      },
      {
        id: 5,
        issue: '2022353',
        poster: 'assets/images/background/play_bg.jpg',
        src: '//player.alicdn.com/video/aliyunmedia.mp4'
      },
      {
        id: 6,
        issue: '2022353',
        poster: 'assets/images/background/play_bg.jpg',
        src: '//player.alicdn.com/video/aliyunmedia.mp4'
      }
    ];
  }

}
