import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit {
  @Input() isVisible = false;
  @Input() issue = '2022357';
  @Input() openTime = '';
  @Input() codeList: any[] = [];
  @Input() poster = '';
  @Input() videoSrc = '';
  @Output() closeModalFn = new EventEmitter();
  played = false;
  videoClass: string = '';
  constructor() { }

  ngOnInit(): void {
    this.videoClass = 'video' + this.issue;
  }

  palyVideo(){
    let videoDom: any = document.querySelector('.' + this.videoClass);
    videoDom.play();
    this.played = !this.played;
  }

  closeModal() {
    this.played = !this.played;
    this.closeModalFn.emit();
  }

}
