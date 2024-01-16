import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultModel } from 'src/app/model/system.model';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [APIService]
})
export class HomeComponent implements OnInit {
    bannerData: any = {};
    defaultBanners: any[] = [];
    smallBanners: any[] = [];
    lotteryHistory: any[] = [];
    // 开奖信息
    openCodeList: any[] = [];
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
        this.getOpenCodeList();
        this.getOpenCodeInterval = setInterval(() => {
            this.getOpenCodeList();
        }, 10000)
        this.getVideoStream();
        this.getCountDown();
        this.getBannerList();

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
            if (res && res['data'].length > 0) {
                this.issue = res['data']['0']['issue'];
                this.endTime = res['data']['0']['serverTime'];
                this.currentResult = res['data']['0']['preDrawCode'].split(',');
                this.nextIssue = res['data']['0']['preDrawIssue'];
                this.surplusTime = res['data']['0']['surplusTime'];
                this.surplusTimeInterval = setInterval(() => {
                    this.surplusTime--;
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
            console.log('');
            if (res && res.error == 0) {
                this.videoStream = res.data.videoStream;
            }
        });
    }
    /**
     * 获取开奖号码
     */
    getOpenCodeList() {
        const param = { page: this.page, size: this.size, lottery: 'angular14' }
        this.apiService.getOpenInfo(param).subscribe((res: any) => {
            if (res && res.error === 0) {
                if (res && res['data']['list'].length > 0) {
                    this.openCodeList = res['data']['list'];
                    this.openCodeList.forEach(s => {
                        s['code'] = s['code'].split(',');
                    });
                }
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
    getBannerList() {
        setTimeout(() => {
            this.defaultBanners = [
                { img: 'assets/images/banner/img_1.jpg' },
                { img: 'assets/images/banner/img_2.jpg' },
                { img: 'assets/images/banner/img_3.jpg' },
            ];
            this.smallBanners = [
                { img: 'assets/images/banner/s_img_1.jpg' },
                { img: 'assets/images/banner/s_img_2.jpg' },
                { img: 'assets/images/banner/s_img_3.jpg' },
            ]
        }, 1000);
    }
}
