import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slider: any;
  array = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }
  show(index: number){
    console.log('当前为:' + index);
  }
  go(){
    this.slider.goTo(2);
  }
}
