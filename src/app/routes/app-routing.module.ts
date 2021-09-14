import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlagsListComponent } from '../pages/flags-list/flags-list.component';
import { FlagsDetailComponent } from '../pages/flags-detail/flags-detail.component';

const routes: Routes = [
  {
    path: 'flaglist',
    component: FlagsListComponent
  },
  {
    path: 'flaglist/flag',
    component: FlagsDetailComponent,
  },
  { path: '', redirectTo: 'flaglist', pathMatch: 'full' },
  { path: '**', redirectTo: 'flaglist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
