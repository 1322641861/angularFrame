import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss'],
    providers: [APIService]
})
export class AnnouncementComponent implements OnInit {
   
    constructor(private apiService: APIService) { }

    ngOnInit(): void {
    }

    // 监听搜索组件的输入值
    search(event: any) {
        console.log('开奖公告');
        console.log(event);
    }

    ngOnDestroy(): void {
    }
  
}
