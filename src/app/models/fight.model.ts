import { Fighter } from './fighter.model';

export interface Fight {
  id: number;
  date: Date;
  fighter_blue: Fighter;
  fighter_red: Fighter;
}
