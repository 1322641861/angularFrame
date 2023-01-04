import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '3.63rem', // 134.2px
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  beforeChange(event: any) {
    console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event: any) {
    console.log('slide to ' + event);
  }

}
