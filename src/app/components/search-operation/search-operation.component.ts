import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-operation',
  templateUrl: './search-operation.component.html',
  styleUrls: ['./search-operation.component.scss']
})
export class SearchOperationComponent implements OnInit {
  lotteryName = '香港时时彩';
  radioValue = '1';
  startDate: any;
  endDate: any;
  issueNo: any;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

}
