import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlayListComponent } from './play-list/play-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile', component: UserProfileComponent},
      {path: 'playlist', component: PlayListComponent},
      {path: '', component: DashboardComponent}
      // {
      //   path: '',
      //   component: NopagefoundComponent
      // },
      // {
      //   path: '**',
      //   redirectTo: '/dashboard',
      //   pathMatch: 'full'
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
