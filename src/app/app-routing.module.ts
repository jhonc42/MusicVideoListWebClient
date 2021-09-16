import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './guards/validate-token.guard';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'protected',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidateTokenGuard],
    canLoad: [ValidateTokenGuard]
  },
  { path: '', redirectTo: '/protected/dashboard', pathMatch: 'full' },
  // {
  //   path: '**',
  //   redirectTo: 'auth'
  // }
  {path: '**', component: NopagefoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
