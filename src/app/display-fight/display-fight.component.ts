import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fight } from '../models/fight.model';

@Component({
  selector: 'app-display-fight',
  templateUrl: './display-fight.component.html',
  styleUrls: ['./display-fight.component.css'],
})
export class DisplayFightComponent implements OnInit {
  URI = 'https://localhost:5001/api/fight';
  constructor(private http: HttpClient) {
    this.loadFights();
  }
  fights = new Array<Fight>();
  loadFights() {
    this.http.get<Fight[]>(this.URI).subscribe((response) => {
      console.log(response);
      this.fights = response;
    });
  }
  ngOnInit(): void {}
}
