import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
    selector: 'app-big-operation',
    templateUrl: './big-operation.component.html',
    styleUrls: ['./big-operation.component.scss']
})
export class BigOperationComponent implements OnInit {
    @Input() lotteryDetail: any = {};
    @Input() lottery = '香港时时彩';
    @Input() currentIssue = '2022357';
    @Input() endTime = "2022-12-23 21:15:00";
    @Input() result: string[] = ['8', '6', '7', '3', '2'];
    @Input() surplusTime: string[]= ['0', '0', '0', '0'];
    @Input() hasResultBtn = true;
    @Input() nextIssue = '';
    constructor(
        private coms: CommonService
    ) { }

    ngOnInit(): void {
    }

    goPage(url: string) {
        this.coms.goNavigate("/" + url);
    }

    getBallColor(b: any) {
        return this.coms.getBallColor(b);
    }
}
