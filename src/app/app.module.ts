import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightersComponent } from './fighters/fighters.component';
import { FightsComponent } from './fights/fights.component';
import { SettingsComponent } from './settings/settings.component';

import { Store, StoreModule } from '@ngrx/store';
import { settingReducer } from './reducers/setting.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { CreateFighterComponent } from './create-fighter/create-fighter.component';
import { DisplayFighterComponent } from './display-fighter/display-fighter.component';
import { DisplayFightComponent } from './display-fight/display-fight.component';
import { CreateFightComponent } from './create-fight/create-fight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
];
@NgModule({
  declarations: [
    AppComponent,
    FightersComponent,
    FightsComponent,
    SettingsComponent,
    ReadComponent,
    CreateComponent,
    CreateFighterComponent,
    DisplayFighterComponent,
    DisplayFightComponent,
    CreateFightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      setting: settingReducer,
    }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ...materialModules,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
