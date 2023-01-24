import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as dayjs from 'dayjs';

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
      if (res instanceof NavigationEnd) {
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

  navList = [
    { name: '首頁', link: '/home' },
    { name: '開獎公告', link: '/announcement' },
    { name: '開獎視頻', link: '/videos' },
    { name: '玩法規則', link: '/rules' },
    { name: '聯繫我們', link: '/contact' },
  ];
  tabIndex = 0;
  date = '';
  week = '';
  timer: any;

  ngOnInit(): void {
    dayjs.locale('zh-cn');
    this.getDate();
  }

  changeLink(index: number) {
    this.tabIndex = index;
  }

  getDate() {
    this.timer = setInterval(() => {
      this.date = dayjs().format('YYYY-MM-DD HH:mm:ss');
      // this.week = dayjs().format('dddd');
      var week = new Date().getDay();
      switch (week) {
        case 0:
          this.week = '禮拜日'
          break;
        case 1:
          this.week = '禮拜一'
          break;
        case 2:
          this.week = '禮拜二'
          break;
        case 3:
          this.week = '禮拜三'
          break;
        case 4:
          this.week = '禮拜四'
          break;
        case 5:
          this.week = '禮拜五'
          break;
        case 6:
          this.week = '禮拜六'
          break;
        default:
          break;
      }
    }, 1000)

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}
