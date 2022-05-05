import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fight } from '../models/fight.model';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FightService } from '../fight.service';

@Component({
  selector: 'app-display-fight',
  templateUrl: './display-fight.component.html',
  styleUrls: ['./display-fight.component.css'],
})
export class DisplayFightComponent implements OnInit {
  URI = 'https://localhost:5001/api/fight';
  fight: Fight | undefined;
  subscription: Subscription | undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
    private FightService: FightService
  ) {
    this.loadFights();
  }
  fights = new Array<Fight>();
  loadFights() {
    this.http.get<Fight[]>(this.URI).subscribe((response) => {
      console.log(response);
      this.fights = response;
    });
  }
  editFight(value: Fight) {
    this.FightService.setFight = value;
    this.router.navigate(['/addfight']);
  }
  ngOnInit(): void {}
  faXmark = faXmark;
  faPen = faPen;
}
