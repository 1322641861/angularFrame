import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { ContentComponent } from './content/content.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { H5NavTabComponent } from '../../components/mobile/h5-nav-tab/h5-nav-tab.component';
import { SidebarComponent } from '../../components/mobile/sidebar/sidebar.component';
import { H5PageBodyComponent } from '../../components/mobile/h5-page-body/h5-page-body.component';
import { H5homeComponent } from './h5home/h5home.component';
import { H5rulesComponent } from './h5rules/h5rules.component';
import { H5contactComponent } from './h5contact/h5contact.component';

@NgModule({
  declarations: [
    ContentComponent,
    H5NavTabComponent,
    SidebarComponent,
    H5PageBodyComponent,
    H5homeComponent,
    H5rulesComponent,
    H5contactComponent,
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    NgZorroAntdMobileModule
  ]
})
export class MobileModule { }
