import { Component, Input, OnInit } from '@angular/core';
import { QaObserver } from 'src/app/services/qaObserver.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-h5-lottery-list',
  templateUrl: './h5-lottery-list.component.html',
  styleUrls: ['./h5-lottery-list.component.scss']
})
export class H5LotteryListComponent implements OnInit {
  @Input() lotteryHistory: any[] = [];
  @Input() hasMore = false;
  nzTotal = 20;
  nzPageIndex = 1;

  constructor(
    private qaObserver: QaObserver<any>,
    private coms: CommonService,
  ) { }

  ngOnInit(): void {
  }

  changeModal(videoItem: any = null) {
    this.coms.commonShow({content: '功能维护中，如有疑问请联系管理员'})
    // if (videoItem) {
    //   this.qaObserver.setQuestion(videoItem);
    // }
  }

  getBallColor(b: string): string {
    // return this.coms.getBallColor(b)
    return ''
  }
}
