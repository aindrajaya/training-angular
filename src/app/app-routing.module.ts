import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';


const routes: Routes = [
  {path: 'heroes', component: HeroParentComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'error', component: ErrorpageComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
