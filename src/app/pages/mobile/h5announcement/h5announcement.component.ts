import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-h5announcement',
  templateUrl: './h5announcement.component.html',
  styleUrls: ['./h5announcement.component.scss'],
  providers: [APIService],
})
export class H5announcementComponent implements OnInit, OnChanges {
  @Input() selectedIndex: any;
  lotteryHistory: any[] = [];
  // 开奖信息
  openCodeList: any;
  lotteryDetail: any;
  issue: string = "";
  nextIssue: string = "";
  currentResult: any[] = [];
  endTime: string = "";
  surplusTime: any;
  surplusTimeInterval: any;
  /** 倒计时 小时 */
  hourArr: string[] = ['0', '0'];
  /** 倒计时 分钟 */
  minuteArr: string[] = ['0', '0'];
  /** 倒计时 秒 */
  secondArr: string[] = ['0', '0'];
  countdownInterval: any;
  hoverLists: any;
  getOpenCodeInterval: any;
  // 直播地址
  videoStream: string = '';
  page: number = 0;
  size: number = 20
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    // this.getOpenCodeList();
    // this.getOpenCodeInterval = setInterval(() => {
    //   this.getOpenCodeList();
    // }, 10000)
    // // this.getVideoStream();
    // this.getCountDown();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedIndex === 1) {
      this.getOpenCodeList();
      this.getOpenCodeInterval = setInterval(() => {
        this.getOpenCodeList();
      }, 10000)
      // this.getVideoStream();
      this.getCountDown();
    } else {
      clearInterval(this.surplusTimeInterval);
      clearInterval(this.getOpenCodeInterval);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.surplusTimeInterval);
    clearInterval(this.getOpenCodeInterval);
  }
  /**
   * 倒计时
   */
  getCountDown() {
    this.apiService.getCountDown().subscribe((res: any) => {
      if (res && res['data'] && res['data'].length > 0) {
        this.issue = res['data']['0']['issue'];
        this.endTime = res['data']['0']['serverTime'];
        this.currentResult = res['data']['0']['preDrawCode'].split(',');
        this.nextIssue = res['data']['0']['preDrawIssue'];
        this.surplusTime = res['data']['0']['surplusTime'];
        this.surplusTimeInterval = setInterval(() => {
          if (this.surplusTime > 0) this.surplusTime--;
          this.formatTime(this.surplusTime);
          if (this.surplusTime <= 0) {
            this.surplusTime = 0;
            clearInterval(this.surplusTimeInterval);
            this.getCountDown();
            this.getOpenCodeList();
          }
        }, 1000)
      }
    })
  }
  /**
   * 获取直播地址
   */
  getVideoStream() {
    this.apiService.getVideoStream().subscribe((res: any) => {
      if (res && res.error == 0) {
        this.videoStream = res.data.videoStream;
      }
    });
  }
  /**
   * 获取开奖号码
   */
  getOpenCodeList() {
    const param = { page: this.page, size: this.size, lottery: 'hkssc' }
    this.apiService.getOpenInfo(param).subscribe((res: any) => {
      if (res && res.error === 0) {
        if (res && res['data']['list'].length > 0) {
          this.openCodeList = res['data']['list'];
          this.openCodeList.forEach((s: any) => {
            s['code'] = s['code'].split(',');
          });
        } else {
          this.openCodeList = []
        }
      } else {
        this.openCodeList = []
      }
    })
  }
  /** 格式化时间 */
  formatTime(seconds: number) {
    const m = 60,
      h = m * 60;
    const hh = Math.floor(seconds / h),
      mm = Math.floor((seconds % h) / m),
      ss = Math.floor((seconds % h) % m);
    this.hourArr = this.prefixZero(hh).split('');
    this.minuteArr = this.prefixZero(mm).split('');
    this.secondArr = this.prefixZero(ss).split('');
    this.hoverLists = this.minuteArr.concat(this.secondArr);
    return this.hoverLists;
  }
  prefixZero(num: any, n = 2) {
    return (Array(n).join('0') + num).slice(-n);
  }

  getHistoryList() {
    setTimeout(() => {
      this.lotteryHistory = [
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
        { issue: '2022355', openTime: '2022-12-22 21:20:00', code: ['8', '2', '6', '3', '8'], videoId: 11 },
      ];
    }, 1000);
  }

  searchEvent(issueNo: any) {
    console.log(issueNo);
  }

}
