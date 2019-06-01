import { AuthGuard } from './core/auth.guard';
import { CategoriesIndexComponent } from './categories/index/categories-index.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './categories/exercises/exercises.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'categories', pathMatch: 'full', component: CategoriesIndexComponent, canActivate: [AuthGuard]},
  {path: 'categories/:id', component: ExercisesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
