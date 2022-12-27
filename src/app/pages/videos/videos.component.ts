import { Component, OnInit } from '@angular/core';
declare var Aliplayer: any;
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  player: any;
  aliplayer: any;
  date = null;
  constructor() { }

  ngOnInit(): void {
    // this.player = document.getElementById('player01') as any;
    // this.player.setAttribute("video-url", 'https://b-hls-06.doppiocdn.com/hls/80753916_240p/master/80753916_240p.m3u8');
    // this.player.getVueInstance().play();
    // // 监听事件回调
    // this.player.addEventListener('message', (evt:any) => {
    //     console.log('直播加载失败...', evt);
    // });
    // this.player.addEventListener('error', (evt:any) => {
    //   // console.log('播放器出错回调...', evt);
    // });

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.aliplayer = new Aliplayer({
      "id": "player-con",
      "source": "//player.alicdn.com/video/aliyunmedia.mp4",
      "width": "100%",
      "height": "500px",
      "autoplay": false,
      "isLive": false,
      "rePlay": false,
      "playsinline": true,
      "preload": true,
      "controlBarVisibility": "hover",
      "useH5Prism": true
    }, function (aliplayer: any) {
        console.log("The player is created");
      }
    );
  }
  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
}
