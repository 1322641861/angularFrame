import { Component, OnDestroy, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
declare let Aliplayer: any;
declare let Hls: any;
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  providers: [APIService]
})
export class VideosComponent implements OnInit, OnDestroy {

  videoPlayer: any;
  date = null;
  nzTotal = 12;
  nzPageIndex = 1;
  videoStream: any;

  constructor(private apiService: APIService,
    private message: NzMessageService) { }

  ngOnDestroy(): void {
    if (!this.videoPlayer.paused) {
      this.videoPlayer.pause();
    }
    this.videoPlayer.removeAttribute('src');
    this.videoPlayer.load();
  }

  ngOnInit(): void {
    this.getBrickVideoStream();
  }

  getBrickVideoStream() {
    this.apiService.getVideoStream().subscribe((res: any) => {
      if (res && res.error == 0) {
        this.videoStream = res.data.videoStream;
        this.hlsPlay();
      } else {
        this.message.error(res.message || '获取视频流失败...');
      }
    });
  }

  // 监听搜索组件的输入值
  search(event: any) {
    console.log('视频');
    console.log(event);
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

  pageIndexChange(index: number) {
    console.log('pageIndexChange', index);
  }

}
