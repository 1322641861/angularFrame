import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-list',
  templateUrl: './lottery-list.component.html',
  styleUrls: ['./lottery-list.component.scss']
})
export class LotteryListComponent implements OnInit {
  @Input() lotteryHistory: any[] = [];
  @Input() hasMore = false;
  constructor() { }

  ngOnInit(): void {
  }

}
