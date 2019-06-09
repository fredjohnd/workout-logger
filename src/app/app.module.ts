import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { MomentModule } from 'ngx-moment';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatDividerModule, MatIconModule, MatExpansionModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';

import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { CategoryIndexComponent } from './categories/index/category-index.component';
import { CategoryShowComponent } from './categories/show/category-show.component';
import { WorkoutIndexComponent } from './workout/index/workout-index.component';
import { WorkoutShowComponent } from './workout/show/workout-show.component';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
import { WorkoutHeaderNavigationComponent } from './components/workout-header-navigation/workout-header-navigation.component';
import { InputDialogComponent } from './components/input-dialog/input-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryIndexComponent,
    CategoryShowComponent,
    HomeComponent,
    NavigationComponent,
    UserProfileComponent,
    WorkoutIndexComponent,
    WorkoutShowComponent,
    ItemSelectorComponent,
    WorkoutHeaderNavigationComponent,
    InputDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule
  ],
  entryComponents: [
    InputDialogComponent,
    ConfirmDialogComponent,
    ItemSelectorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
