import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { H5contactComponent } from './h5contact/h5contact.component';
const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'content'
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'h5contact',
    component: H5contactComponent
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
