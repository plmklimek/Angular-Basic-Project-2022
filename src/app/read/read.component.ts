import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Setting } from '../models/setting.model';
import { AppState } from '../app.state';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  settings: Observable<Setting>;

  constructor(private store: Store<AppState>) {
    this.settings = store.select('setting');
  }

  ngOnInit(): void {}
}
