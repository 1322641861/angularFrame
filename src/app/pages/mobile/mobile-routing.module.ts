import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'content'
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: '**', redirectTo: 'content'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
