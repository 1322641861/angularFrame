import { Component, OnInit } from '@angular/core';
import { QaObserver } from 'src/app/services/qaObserver.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  hidden: boolean = false;
  fullScreen: boolean = true;
  topFlag: boolean = false;
  tintColor: string = '#fff';
  unselectedTintColor: string = 'var(--color-h5-hint-text)';
  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
  };
  selectedIndex: number = 0;
  videoItem: any = {
    src: '',
    videoId: 0
  };
  openModal = false;

  constructor(
    private qaObserver: QaObserver,
  ) {}

  ngOnInit(): void {
    this.qaObserver.getQuestion().subscribe(res => {
      console.log('content res', res);
      this.changeModal(res);
    })
  }

  changeModal(videoItem: any = null) {
    if (videoItem) {
      this.videoItem = videoItem;
    }
    // else {
    //   this.videoItem = null;
    // }
    this.openModal = !this.openModal;
    console.log('----------------------------', this.videoItem, this.openModal);
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
