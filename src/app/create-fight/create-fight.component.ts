import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FightService } from '../fight.service';
import { Fighter } from '../models/fighter.model';
@Component({
  selector: 'app-create-fight',
  templateUrl: './create-fight.component.html',
  styleUrls: ['./create-fight.component.css'],
})
export class CreateFightComponent implements OnInit {
  id?: number;
  fighter_1!: Fighter;
  fighter_2!: Fighter;
  date!: Date;
  URI = 'https://localhost:5001/api/fighter';
  constructor(private http: HttpClient, private FightService: FightService) {
    this.loadFighters();
    if (
      Object.keys(this.FightService.getFight).length == 0 ||
      this.FightService.getFight == null
    ) {
      let fighter = this.FightService.getFight;
      this.id = fighter.id;
      this.fighter_1 = fighter.fighter_blue;
      this.fighter_2 = fighter.fighter_red;
      this.date = fighter.date;
    } else {
      this.id = undefined;
    }
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
        id: this.id || null,
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
