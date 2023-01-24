import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from "../../../services/common.service";

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
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
  }
  
  playHistoryVideo(currentLottery: any) {

    this.message.warning('功能维护中，如有疑问请联系管理员');
    // this.isVisible = true;
    // this.videoSrc = currentLottery;
  }

  closeModalFn() {
    this.isVisible = !this.isVisible;
  }

}
