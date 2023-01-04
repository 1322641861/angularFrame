import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { ContentComponent } from './content/content.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { H5NavTabComponent } from '../../components/mobile/h5-nav-tab/h5-nav-tab.component';
import { SidebarComponent } from '../../components/mobile/sidebar/sidebar.component'

@NgModule({
  declarations: [
    ContentComponent,
    H5NavTabComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    NgZorroAntdMobileModule
  ]
})
export class MobileModule { }
