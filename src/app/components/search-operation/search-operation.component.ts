import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as dayjs from 'dayjs';
@Component({
  selector: 'app-search-operation',
  templateUrl: './search-operation.component.html',
  styleUrls: ['./search-operation.component.scss']
})
export class SearchOperationComponent implements OnInit {
  lotteryName = 'angular14';
  radioValue = '1';
  startDate: any;
  endDate: any;
  issueNo: any;
  @Input() title: string | undefined;
  @Output() searchEvent = new EventEmitter<Object>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    // console.log('onChange: ', result);
  }
  search(){
    if(this.radioValue == '1'){
      if(!this.startDate || !this.endDate){
        console.log('请选择正确的时间段!');
      }
      const startdate = new Date(this.startDate), enddate = new Date(this.endDate);
      // 3个月 3*30*24*3600*1000
      if(startdate.getTime() > enddate.getTime() || (enddate.getTime() - startdate.getTime() >= 3*30*24*3600*1000)){
        console.log('请选择正确的时间段!');
      }
      this.searchEvent.emit({type: '1', startDate: dayjs(this.startDate).format("YYYY-MM-DD"), endDate: dayjs(this.endDate).format("YYYY-MM-DD")});
      // console.log(dayjs(new Date(this.startDate)).format("YYYY-MM-DD") + ' ===== ' + this.endDate + '========' + this.radioValue);
    }else{
      if(!this.issueNo){
        console.log('请输入期号!');
      }
      this.searchEvent.emit({type: '2', issueNo: this.issueNo});
    }
  }

}
