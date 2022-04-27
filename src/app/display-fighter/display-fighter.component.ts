import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fighter } from '../models/fighter.model';
import { Fight } from '../models/fight.model';
@Component({
  selector: 'app-display-fighter',
  templateUrl: './display-fighter.component.html',
  styleUrls: ['./display-fighter.component.css'],
})
export class DisplayFighterComponent implements OnInit {
  URI = 'https://localhost:5001/api/fighter';
  constructor(private http: HttpClient) {
    this.loadFighters();
  }
  fighters = new Array<Fighter>();
  loadFighters() {
    this.http.get<Fighter[]>(this.URI).subscribe((response) => {
      this.fighters = response;
      //this.fighters = response;
    });
  }
  ngOnInit(): void {
    // this.loadFighters();
  }
}
