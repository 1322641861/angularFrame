import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
  ) { 
    this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd){
        let routerPath = res.url;
        if (routerPath === '/') {
          this.tabIndex = 0;
        } else {
          let index = this.navList.findIndex(item => item.link.includes(routerPath));
          this.tabIndex = index > 0 ? index : 0;
        }
      }
    })
  }
  
  navList= [
    {name: '首页', link: '/home'},
    {name: '开奖公告', link: '/announcement'},
    {name: '开奖视频', link: '/videos'},
    {name: '玩法规则', link: '/rules'},
    {name: '联系我们', link: '/contact'},
  ];
  tabIndex = 0;
  date =  '';
  week = '';
  timer: any;

  ngOnInit(): void {
    moment.locale('zh-cn');
    this.getDate();
  }

  changeLink(index: number) {
    this.tabIndex = index;
  }

  getDate() {
    this.timer = setInterval(() => {
      this.date = moment().format('YYYY-MM-DD HH:mm:ss');
      this.week = moment().format('dddd');
    }, 1000)
    
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
