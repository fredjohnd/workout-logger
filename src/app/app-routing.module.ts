import { AuthGuard } from './core/auth.guard';
import { CategoriesIndexComponent } from './categories/index/categories-index.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'categories', component: CategoriesIndexComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
