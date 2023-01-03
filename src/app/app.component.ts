import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hkssc';
  isPc = '1';
  constructor(
    private coms: CommonService
  ){
    this.isPc = localStorage.getItem('isPc') as string;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.isPc == '1'){
      this.coms.goNavigate('/home');
    }else{
      this.coms.goNavigate('/mobile/content');
    }
  }
}
