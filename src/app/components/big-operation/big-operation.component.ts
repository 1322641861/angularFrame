import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-operation',
  templateUrl: './big-operation.component.html',
  styleUrls: ['./big-operation.component.scss']
})
export class BigOperationComponent implements OnInit {
  @Input() lottery = '香港时时彩';
  @Input() currentIssue = '2022357';
  @Input() endTime = "2022-12-23 21:15:00";
  @Input() result: string[] = ['8', '6', '7', '3', '2'];
  @Input() openTime = 32;
  constructor() { }

  ngOnInit(): void {
  }

}
