import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightersComponent } from './fighters/fighters.component';
import { FightsComponent } from './fights/fights.component';
import { SettingsComponent } from './settings/settings.component';

import { Store, StoreModule } from '@ngrx/store';
import { settingReducer } from './reducers/setting.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    FightersComponent,
    FightsComponent,
    SettingsComponent,
    ReadComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      setting: settingReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
