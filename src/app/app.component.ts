import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular14';
  isPc = '1';

  constructor(
    private coms: CommonService,
  ){
    this.isPc = localStorage.getItem('isPc') as string;
  }

  ngOnInit(): void {
    if (this.isPc == '1'){
      this.coms.goNavigate('/home');
    } else {
      this.coms.goNavigate('/mobile/content');
    }
  }
}
