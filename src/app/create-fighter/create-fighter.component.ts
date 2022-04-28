import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fighter } from '../models/fighter.model';

@Component({
  selector: 'app-create-fighter',
  templateUrl: './create-fighter.component.html',
  styleUrls: ['./create-fighter.component.css'],
})
export class CreateFighterComponent implements OnInit {
  fighter: Fighter = { id: 0, name: '', surname: '', age: 0 };
  URI = 'https://localhost:5001/api/fighter';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  addFighter() {
    //this.fighter.age = parseInt(this.fighter.age);
    this.http.post(this.URI, this.fighter).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
