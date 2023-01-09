import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h5-lottery-list',
  templateUrl: './h5-lottery-list.component.html',
  styleUrls: ['./h5-lottery-list.component.scss']
})
export class H5LotteryListComponent implements OnInit {
  @Input() lotteryHistory: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}
