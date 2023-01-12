import { Component, Input, OnInit } from '@angular/core';
import { QaObserver } from 'src/app/services/qaObserver.service';

@Component({
  selector: 'app-h5-lottery-list',
  templateUrl: './h5-lottery-list.component.html',
  styleUrls: ['./h5-lottery-list.component.scss']
})
export class H5LotteryListComponent implements OnInit {
  @Input() lotteryHistory: any[] = [];

  constructor(
    private qaObserver: QaObserver
  ) { }

  ngOnInit(): void {
  }

  changeModal(videoItem: any = null) {
    if (videoItem) {
      this.qaObserver.setQuestion(videoItem);
    }
  }
}
