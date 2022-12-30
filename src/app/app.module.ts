import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_HK } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { RulesComponent } from './pages/rules/rules.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NavTabComponent } from './components/nav-tab/nav-tab.component';
import { NavBottomComponent } from './components/nav-bottom/nav-bottom.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { BigOperationComponent } from './components/big-operation/big-operation.component';
import { BallComponent } from './components/ball/ball.component';
import { LotteryListComponent } from './components/lottery-list/lottery-list.component';
import { LotteryItemComponent } from './components/lottery-list/lottery-item/lottery-item.component';
import { SearchOperationComponent } from './components/search-operation/search-operation.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnouncementComponent,
    RulesComponent,
    VideosComponent,
    ContactComponent,
    NavTabComponent,
    NavBottomComponent,
    BannerComponent,
    PageBodyComponent,
    BigOperationComponent,
    BallComponent,
    LotteryListComponent,
    LotteryItemComponent,
    SearchOperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDatePickerModule,
    NzCarouselModule,
    NzInputModule,
    NzRadioModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    { provide: NZ_I18N, useValue: zh_HK }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
