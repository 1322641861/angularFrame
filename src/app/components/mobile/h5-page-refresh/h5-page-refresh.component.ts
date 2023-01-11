import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-h5-page-refresh',
  templateUrl: './h5-page-refresh.component.html',
  styleUrls: ['./h5-page-refresh.component.scss']
})
export class H5PageRefreshComponent implements OnInit {
  @Input() direction = '';
  @Output() upRefresh = new EventEmitter();
  @Output() downRefresh = new EventEmitter();

  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: false
    },
    endReachedRefresh: false, // 滚到底部自动刷新, 适合长滚动列表
  };
  dtPullToRefreshStyle = { height: '100%' };
  page = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  pullToRefresh(event: any) {
    if (event === 'down') {
      this.downRefresh.emit();
    } else if (event === 'up') {
      this.upRefresh.emit();
    } else if (event === 'endReachedRefresh') {}
  }

}
