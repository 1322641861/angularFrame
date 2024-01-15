import { Component, OnInit } from '@angular/core';
// import * as rules from "../../../assets/other/lottery-desc.json";

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  ticketMsg: any[] = [];
  introduceMsg: any[] = [];
  gameMsg: any[] = [];
  tabIndex = 0;
  navList = [
    '介紹問答',
    '獎券規則',
    '遊戲規範',
  ];

  constructor() { }

  ngOnInit(): void {
    this.getDescrtion();
  }

  getDescrtion() {
    // const rulesData = (rules as any).default;
    // if (rulesData) {
    //   this.ticketMsg = rulesData.ticket.split('\n');
    //   this.introduceMsg = rulesData.introduce.split('\n');
    //   this.gameMsg = rulesData.game.split('\n');
    // }
  }

  changeTabIndex(index: number) {
    this.tabIndex = index;
  }

}

interface Rules {
  game: string;
  introduce: string;
  ticket: string;
}
