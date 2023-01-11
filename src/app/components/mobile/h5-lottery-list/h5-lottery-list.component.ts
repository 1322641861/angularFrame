import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h5-lottery-list',
  templateUrl: './h5-lottery-list.component.html',
  styleUrls: ['./h5-lottery-list.component.scss']
})
export class H5LotteryListComponent implements OnInit {
  @Input() lotteryHistory: any[] = [];
  openModal = false;
  modalSrc = '';
  modalVId = '';
  constructor() { }

  ngOnInit(): void {
  }

  changeModal(videoItem: any = null) {
    if (videoItem) {
      this.modalSrc = videoItem.src;
      this.modalVId = videoItem.videoId;
    } else {
      this.modalSrc = '';
      this.modalVId = '';
    }
    this.openModal = !this.openModal;
  }
}
