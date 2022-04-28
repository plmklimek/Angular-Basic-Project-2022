import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fighter } from '../models/fighter.model';
@Component({
  selector: 'app-create-fight',
  templateUrl: './create-fight.component.html',
  styleUrls: ['./create-fight.component.css'],
})
export class CreateFightComponent implements OnInit {
  fighter_1!: Fighter;
  fighter_2!: Fighter;
  date!: Date;
  URI = 'https://localhost:5001/api/fighter';
  constructor(private http: HttpClient) {
    this.loadFighters();
  }
  fighters = new Array<Fighter>();
  loadFighters() {
    this.http.get<Fighter[]>(this.URI).subscribe((response) => {
      this.fighters = response;
    });
  }
  changeDatePicker(event: any): any {
    this.date = event.value;
  }
  // onChange(event: any, number_fighter: number) {
  //   let fighter = event.target.options[event.target.selectedIndex].value;
  //   console.log(event.target.options[0]);
  //   let fighter_URI = `https://localhost:5001/api/fighter/${fighter.id}`;
  //   this.http.get<Fighter>(fighter_URI).subscribe((response) => {
  //     if (number_fighter == 1) {
  //       this.fighter_1 = response;
  //     } else {
  //       this.fighter_2 = response;
  //     }
  //   });
  // }
  addFight() {
    const URI_FIGHT = 'https://localhost:5001/api/fight';
    //this.fighter.age = parseInt(this.fighter.age);
    this.http
      .post(URI_FIGHT, {
        _date: this.date,
        blue_fighterid: this.fighter_1.id,
        red_fighterid: this.fighter_2.id,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  ngOnInit(): void {}
}
