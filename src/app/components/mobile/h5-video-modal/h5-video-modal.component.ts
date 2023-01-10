import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-h5-video-modal',
  templateUrl: './h5-video-modal.component.html',
  styleUrls: ['./h5-video-modal.component.scss']
})
export class H5VideoModalComponent implements OnInit, OnChanges {
  @Input() openModal = false;
  @Input() issue = '2022355';
  @Input() openTime = '2022-12-26 21:34:15';
  @Input() codeList: any[] = [6,5,3,7,3];
  @Input() modalSrc = '';
  @Input() vid = '';
  @Output() changeModalFn = new EventEmitter();
  modalClassName = '';
  playing = false;
  videoDom: any;
  listened = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.modalClassName = 'modal-video' + this.vid;
  }

  changeModal() {
    this.removeListener();
    this.changeModalFn.emit();
  }

  playVideo() {
    this.videoDom = this.videoDom ? this.videoDom : document.getElementsByClassName(this.modalClassName)[0];
    this.videoDom.play();
    this.playing = true;
    this.pauseListener();
  }

  pauseListener() {
    if (!this.listened) {
      this.videoDom.addEventListener('pause', () => {
        this.playing = false;
      });
    }
    this.listened = true;
  }

  removeListener() {
    if (this.videoDom) {
      this.videoDom.removeEventListener('pause', () => {console.log('我被移除了')})
      this.videoDom = null;
    }
    this.listened = false;
  }

}
