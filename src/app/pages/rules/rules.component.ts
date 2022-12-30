import { Component, OnInit } from '@angular/core';

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
    '介绍问答',
    '奖券规则',
    '游戏规范',
  ];

  constructor() { }

  ngOnInit(): void {
    this.getDescrtion();
  }

  getDescrtion() {
    fetch("/assets/other/lottery-desc.json")
      .then((res) => res.json())
      .then((json: Rules) => {
          if (json) {
            this.ticketMsg = json.ticket.split('\n');
            this.introduceMsg = json.introduce.split('\n');
            this.gameMsg = json.game.split('\n');
          }
      });
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
