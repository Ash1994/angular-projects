import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path: 'adminHome', component: AdminLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
