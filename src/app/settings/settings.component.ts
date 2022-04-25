import { Component, OnInit } from '@angular/core';
import * as SettingActions from '../actions/setting.actions';
import { Setting } from '../models/setting.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store = store;
  }
  changeSetting(name: string, text: string) {
    const payload: Setting = { name: name, text: text };
    this.store.dispatch(
      SettingActions.AddSetting({
        payload,
      })
    );
  }
  ngOnInit(): void {}
}
