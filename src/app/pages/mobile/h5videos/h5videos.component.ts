import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QaObserver } from 'src/app/services/qaObserver.service';

@Component({
  selector: 'app-h5videos',
  templateUrl: './h5videos.component.html',
  styleUrls: ['./h5videos.component.scss']
})
export class H5videosComponent implements OnInit, AfterViewInit {
  videoSrc = '//player.alicdn.com/video/aliyunmedia.mp4';
  poster = 'assets/images/background/play_bg.jpg';
  videoList: any[] = [];
  played = false;
  constructor(
    private qaObserver: QaObserver<any>
  ) { }

  ngOnInit(): void {
    this.getVideoList();
  }

  ngAfterViewInit(): void {
  }

  searchEvent(issueNo: any) {
    console.log(issueNo);
  }

  changeModal(videoItem: any = null) {
    if (videoItem) {
      this.qaObserver.setQuestion(videoItem);
    }
  }

  playVideo() {
    let videoDom: any = document.getElementsByClassName('h5-video-player')[0];
    videoDom.play();
    this.played = !this.played;
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
        src: 'https://my-files-1259410276.cos.ap-chengdu.myqcloud.com/media/美人谷.mp4'
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
        src: 'https://my-files-1259410276.cos.ap-chengdu.myqcloud.com/media/美人谷.mp4'
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
        src: 'https://my-files-1259410276.cos.ap-chengdu.myqcloud.com/media/美人谷.mp4'
      }
    ];
  }

}
