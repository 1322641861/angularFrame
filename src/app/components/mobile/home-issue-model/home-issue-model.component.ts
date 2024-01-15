import { Component, Input, OnInit } from '@angular/core';
import { QaObserver } from 'src/app/services/qaObserver.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home-issue-model',
  templateUrl: './home-issue-model.component.html',
  styleUrls: ['./home-issue-model.component.scss']
})
export class HomeIssueModelComponent implements OnInit {
  @Input() issue = '';
  @Input() hasResultBtn = true;
  @Input() lotteryDetail: any = {};
  @Input() endTime = "2022-12-23 21:15:00";
  @Input() codeList: string[] = ['8', '6', '7', '3', '2'];
  @Input() surplusTime: string[]= ['0', '0', '0', '0'];
  @Input() nextIssue = '';
  title = 'angular14';

  constructor(
    private qaObserver: QaObserver<any>,
    private coms: CommonService,
  ) { }

  ngOnInit(): void {
  }

  goLive(){
    this.qaObserver.setQuestion({tabIndex: 2});
  }

  goAnnouncementPage() {
    this.qaObserver.setQuestion({tabIndex: 1});
  }

  getBallColor(b: any) {
    // return this.coms.getBallColor(b);
    return ''
  }

}
