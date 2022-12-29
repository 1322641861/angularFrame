import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { RulesComponent } from './pages/rules/rules.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'announcement', component: AnnouncementComponent
  },
  {
    path: 'videos', component: VideosComponent
  },
  {
    path: 'rules', component: RulesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'mobile', loadChildren: () => import('./pages/mobile/mobile.module').then(m => m.MobileModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
