import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
  @Input() poster = 'assets/images/background/play_bg.jpg';
  @Input() videoSrc = 'https://my-files-1259410276.cos.ap-chengdu.myqcloud.com/media/美人谷.mp4';
  @Input() width = "100%";
  @Input() height: string = '';
  @Input() issue = '';
  @Input() openTime = '';
  played = false;
  videoClass: any;
  isVisible = false;
  code = ['8', '2', '6', '3', '8'];
  constructor() { }

  ngOnInit(): void {
    console.log('初始化...');
    this.videoClass = 'video' + this.issue;
  }
  showVideo() {
    this.isVisible = true;
  }
  closeModal(){
    this.isVisible = false;
  }
  palyVideo() {
    let videoDom: any = document.querySelector('.' + this.videoClass);
    // console.log(videoDom);
    videoDom.play();
    this.played = !this.played;
  }

  ngOnDestroy(): void {
    
  }

}
