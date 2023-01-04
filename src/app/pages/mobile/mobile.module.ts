import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { ContentComponent } from './content/content.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { H5NavTabComponent } from '../../components/mobile/h5-nav-tab/h5-nav-tab.component';
import { SidebarComponent } from '../../components/mobile/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { H5PageBodyComponent } from '../../components/mobile/h5-page-body/h5-page-body.component';

@NgModule({
  declarations: [
    ContentComponent,
    H5NavTabComponent,
    SidebarComponent,
    HomeComponent,
    H5PageBodyComponent,
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    NgZorroAntdMobileModule
  ]
})
export class MobileModule { }
