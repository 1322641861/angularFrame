import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-h5contact',
  templateUrl: './h5contact.component.html',
  styleUrls: ['./h5contact.component.scss']
})
export class H5contactComponent implements OnInit {

  constructor(
    private coms: CommonService
  ) { }
  ngOnInit(): void {
  }
  goback(){
    this.coms.goBack();
  }
}
