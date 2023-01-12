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
import { H5announcementComponent } from './h5announcement/h5announcement.component';
import { H5videosComponent } from './h5videos/h5videos.component';
import { HomeIssueModelComponent } from '../../components/mobile/home-issue-model/home-issue-model.component';
import { H5LotteryListComponent } from '../../components/mobile/h5-lottery-list/h5-lottery-list.component';
import { BallComponent } from "../../components/ball/ball.component";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { H5SearchOperationComponent } from '../../components/mobile/h5-search-operation/h5-search-operation.component';
import { FormsModule } from "@angular/forms";
import { H5VideoModalComponent } from '../../components/mobile/h5-video-modal/h5-video-modal.component';
import { H5PageRefreshComponent } from '../../components/mobile/h5-page-refresh/h5-page-refresh.component';
import { QaObserver } from 'src/app/services/qaObserver.service';
@NgModule({
  declarations: [
    ContentComponent,
    H5NavTabComponent,
    SidebarComponent,
    H5PageBodyComponent,
    H5homeComponent,
    H5rulesComponent,
    H5contactComponent,
    H5announcementComponent,
    H5videosComponent,
    HomeIssueModelComponent,
    H5LotteryListComponent,
    BallComponent,
    H5SearchOperationComponent,
    H5VideoModalComponent,
    H5PageRefreshComponent,
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    NgZorroAntdMobileModule,
    NzSpinModule,
    FormsModule,
  ],
  exports: [
    BallComponent,
  ],
  providers: [
    QaObserver,
  ]
})
export class MobileModule { }
