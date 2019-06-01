import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { environment } from 'src/environments/environment';
import { CategoryIndexComponent } from './categories/index/category-index.component';
import { HomeComponent } from './home/home.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoryShowComponent } from './categories/show/category-show.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryIndexComponent,
    CategoryShowComponent,
    HomeComponent,
    NavigationComponent,
    UserProfileComponent
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
