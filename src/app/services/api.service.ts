import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import * as queryString from 'querystring';

@Injectable()
export class APIService {
    constructor(private http: HttpClient) {

    }

    /**
     * 获取开奖信息
     */
    getOpenInfo(params: any) {
        const url = "lotto/list-opencode-by-lottery-video?lottery=hkssc&&size=" + params.size + '&&page=' + params.page;
        return this.http.get(url).pipe(
            map((res) => {
                return res;
            })
        )
    }
    /**
     * 获取倒计时,彩种详情信息
     */
    getCountDown() {
        const url = "lotto/list-lottery-pre-draw-info?code=hkssc";
        return this.http.get(url).pipe(
            map((res) => {
                return res;
            })
        )
    }
    /**
     * 获取直播地址
     */
    getVideoStream() {
        const url = "lotto/get-lottery-video-stream";
        return this.http.get(url).pipe(
            map((res) => {
                return res;
            })
        )
    }
}