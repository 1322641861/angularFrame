import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-h5-video-modal',
  templateUrl: './h5-video-modal.component.html',
  styleUrls: ['./h5-video-modal.component.scss']
})
export class H5VideoModalComponent implements OnInit {
  @Input() openModal = false;
  @Output() changeModalFn = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeModal() {
    this.changeModalFn.emit();
  }

}
