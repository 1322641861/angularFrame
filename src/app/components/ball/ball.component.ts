import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {
  @Input() color: string = 'red'; // red, blue
  @Input() ballSize = '70px';
  @Input() lotteryNum: string = '';
  @Input() marginHor = '0px';
  @Input() fontSize = '36px';

  constructor() { }

  ngOnInit(): void {
  }

}
