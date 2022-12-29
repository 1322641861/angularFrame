import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hkssc';
  isPc = '1';
  constructor(){
    this.isPc = localStorage.getItem('isPc') as string;
  }
}
