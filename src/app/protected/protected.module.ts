import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PlayListComponent } from './play-list/play-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogVideoShowComponent } from './components/dialog-video-show/dialog-video-show.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    DashboardComponent,
    MainPageComponent,
    UserProfileComponent,
    PlayListComponent,
    DialogVideoShowComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class ProtectedModule { }
