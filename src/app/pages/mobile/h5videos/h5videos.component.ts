import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QaObserver } from 'src/app/services/qaObserver.service';;
import { APIService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
declare let Hls: any;


@Component({
  selector: 'app-h5videos',
  templateUrl: './h5videos.component.html',
  styleUrls: ['./h5videos.component.scss'],
  providers: [APIService]
})
export class H5videosComponent implements OnInit, AfterViewInit {
  videoSrc = '//player.alicdn.com/video/aliyunmedia.mp4';
  poster = 'assets/images/background/play_bg.jpg';
  videoList: any[] = [];
  played = false;

  videoPlayer: any;
  date = null;
  nzTotal = 12;
  nzPageIndex = 1;
  videoStream: any;
  constructor(
    private qaObserver: QaObserver<any>,
    private apiService: APIService,
    private coms: CommonService,
  ) { }

  ngOnInit(): void {
    // this.getVideoList();
    this.getBrickVideoStream();
  }

  ngOnDestroy(): void {
    if (!this.videoPlayer.paused) {
      this.videoPlayer.pause();
    }
    this.videoPlayer.removeAttribute('src');
    this.videoPlayer.load();
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
    if (videoDom.play != null) {
      videoDom.play();
      this.played = !this.played;
    } 
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

  getBrickVideoStream() {
    this.apiService.getVideoStream().subscribe((res: any) => {
      if (res && res.error == 0) {
        this.videoStream = res.data.videoStream;
        this.hlsPlay();
      } else {
        this.coms.commonFail({content: res.message || '获取视频流失败...'});
      }
    });
  }

  hlsPlay() {
    const _self = this;
    this.videoPlayer = document.getElementById('video');
    if (Hls.isSupported()) {
      let hls = new Hls();
      hls.loadSource(this.videoStream);
      hls.attachMedia(this.videoPlayer);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        _self.videoPlayer.play();
      });
    } else if (this.videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
      this.videoPlayer.src = this.videoStream;
      this.videoPlayer.addEventListener('canplay', function () {
        _self.videoPlayer.play();
      })
    }
  }

}
