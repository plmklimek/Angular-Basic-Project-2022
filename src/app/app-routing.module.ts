import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFightComponent } from './create-fight/create-fight.component';
import { CreateFighterComponent } from './create-fighter/create-fighter.component';
import { DisplayFightComponent } from './display-fight/display-fight.component';
import { DisplayFighterComponent } from './display-fighter/display-fighter.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'addfight', component: CreateFightComponent },
  { path: 'addfighter', component: CreateFighterComponent },
  { path: 'displayfights', component: DisplayFightComponent },
  { path: 'displayfighters', component: DisplayFighterComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
