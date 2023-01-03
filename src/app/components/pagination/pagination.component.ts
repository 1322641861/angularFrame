import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() nzTotal = 0;
  @Input() nzPageIndex = 0;
  @Output() pageIndexChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  nzPageIndexChange(index: number) {
    this.pageIndexChange.emit(index);
  }

}
