import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { environment } from 'src/environments/environment';
import { CategoriesIndexComponent } from './categories/index/categories-index.component';
import { HomeComponent } from './home/home.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ExercisesComponent } from './categories/exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesIndexComponent,
    HomeComponent,
    NavigationComponent,
    UserProfileComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
