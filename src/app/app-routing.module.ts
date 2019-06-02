import { WorkoutShowComponent } from './workout/show/workout-show.component';
import { AuthGuard } from './core/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryIndexComponent } from './categories/index/category-index.component';
import { CategoryShowComponent } from './categories/show/category-show.component';
import { WorkoutIndexComponent } from './workout/index/workout-index.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},

  {path: 'categories', pathMatch: 'full', component: CategoryIndexComponent, canActivate: [AuthGuard]},
  {path: 'categories/:id', component: CategoryShowComponent, canActivate: [AuthGuard]},

  {path: 'workouts', pathMatch: 'full', component: WorkoutIndexComponent, canActivate: [AuthGuard]},
  {path: 'workouts/:id', component: WorkoutShowComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
