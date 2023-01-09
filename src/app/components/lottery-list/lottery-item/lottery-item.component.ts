import { Component, Input, OnInit } from '@angular/core';
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-lottery-item',
  templateUrl: './lottery-item.component.html',
  styleUrls: ['./lottery-item.component.scss']
})
export class LotteryItemComponent implements OnInit {
  @Input() issue = '2022355';
  @Input() openTime = '2022-12-22 21:20:00';
  @Input() code = ['8', '2', '6', '3', '8'];
  @Input() videoId = 127;
  @Input() currentLottery: any;
  poster = 'assets/images/background/play_bg.jpg';
  videoSrc = 'https://my-files-1259410276.cos.ap-chengdu.myqcloud.com/media/美人谷.mp4';
  isVisible = false;
  constructor(
    private coms: CommonService,
  ) { }

  ngOnInit(): void {
  }
  playHistoryVideo(currentLottery: any) {
    this.isVisible = true;
    // this.coms.goNavigateAboutData(this.videoId)
  }

  closeModalFn() {
    this.isVisible = !this.isVisible;
  }

}
