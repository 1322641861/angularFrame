import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { ContentComponent } from './content/content.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    NgZorroAntdMobileModule
  ]
})
export class MobileModule { }
