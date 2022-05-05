import { Injectable } from '@angular/core';
import { Fight } from './models/fight.model';

@Injectable({
  providedIn: 'root',
})
export class FightService {
  private fight: Fight;
  constructor() {
    this.fight = {} as Fight;
  }
  public get getFight(): Fight {
    return this.fight;
  }

  public set setFight(newValue: Fight) {
    this.fight = newValue;
  }
}
