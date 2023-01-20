import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-lottery-list',
    templateUrl: './lottery-list.component.html',
    styleUrls: ['./lottery-list.component.scss']
})
export class LotteryListComponent implements OnInit {
    @Input() lotteryHistory: any[] = [];
    @Input() hasMore = false;
    nzTotal = 20;
    nzPageIndex = 1;
    constructor() {
        console.log('lotteryHistory',this.lotteryHistory);
        
    }

    ngOnInit(): void {

    }

    pageIndexChange(index: number) {
        console.log('pageIndexChange', index);
    }

}
