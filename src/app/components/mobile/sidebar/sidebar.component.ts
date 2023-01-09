import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  height: number = document.documentElement.clientHeight;
  @Output() openSidebar = new EventEmitter<boolean>();
  @Input() sideOpen = false;
  slideList: any[] = [];

  constructor(
    private coms: CommonService
  ) {}

  onOpenChange(event: boolean) {
    this.openSidebar.emit(!event);
  }

  ngOnInit(): void {
    this.slideList = [
      {name: '聯繫我們', img: 'assets/images/common/email_single.png', onTap: () => {
        this.coms.goNavigate('/mobile/h5contact');
      }},
      {name: 'facebook', img: 'assets/images/common/facebook.png', onTap: () => {}},
      {name: 'twitter', img: 'assets/images/common/twitter.png', onTap: () => {}},
    ]
  }

}
