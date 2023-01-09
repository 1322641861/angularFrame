import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-h5-search-operation',
  templateUrl: './h5-search-operation.component.html',
  styleUrls: ['./h5-search-operation.component.scss']
})
export class H5SearchOperationComponent implements OnInit {
  issueNo: any;
  @Output() searchEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  search() {
    if(!this.issueNo){
      console.log('请输入期号!');
    }
    this.searchEvent.emit(this.issueNo);
  }
  
  onChange(e: any) {
    this.issueNo = e.target.value;
  }

}
