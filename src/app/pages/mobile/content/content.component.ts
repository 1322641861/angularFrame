import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  hidden: boolean = false;
  fullScreen: boolean = true;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
  };
  selectedIndex: number = 1;
  constructor(){
    
  }
  ngOnInit(): void {
  }

  showNextTabBar(event: any) {
    event.preventDefault();
    const PANE_COUNT = 4;
    if (this.selectedIndex == PANE_COUNT - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    console.log('selectedIndex: ', this.selectedIndex);
  }



  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }
}
