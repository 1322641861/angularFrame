import { Component, OnInit } from '@angular/core';
// import * as rules from "../../../assets/other/lottery-desc.json";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

interface Rules {
  game: string;
  introduce: string;
  ticket: string;
}
