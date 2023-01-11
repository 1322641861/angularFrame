import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-h5-page-body',
  templateUrl: './h5-page-body.component.html',
  styleUrls: ['./h5-page-body.component.scss']
})
export class H5PageBodyComponent implements OnInit {
  @Input() direction = '';
  @Input() hasRefresh = false;
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
