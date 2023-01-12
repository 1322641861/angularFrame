import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from "../../../services/common.service";
import { QaObserver } from 'src/app/services/qaObserver.service';

@Component({
  selector: 'app-home-issue-model',
  templateUrl: './home-issue-model.component.html',
  styleUrls: ['./home-issue-model.component.scss']
})
export class HomeIssueModelComponent implements OnInit {
  @Input() issue = '2022357';
  @Input() openTime = '2022-12-31 21:15:00';
  @Input() countDown = 28;
  @Input() codeList: any[] = [8, 5, 7, 3, 2];
  @Input() hasResultBtn = true;
  title = '香港時時彩';
  constructor(
    private coms: CommonService,
    private qaObserver: QaObserver,
  ) { }

  ngOnInit(): void {
  }

  goLive(){
    this.coms.goNavigate("/videos");
  }

  goAnnouncementPage() {
    this.qaObserver.setQuestion({tabIndex: 1});
  }

}
