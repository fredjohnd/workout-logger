import { AuthGuard } from './core/auth.guard';
import { CategoryIndexComponent } from './categories/index/category-index.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryShowComponent } from './categories/show/category-show.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'categories', pathMatch: 'full', component: CategoryIndexComponent, canActivate: [AuthGuard]},
  {path: 'categories/:id', component: CategoryShowComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
