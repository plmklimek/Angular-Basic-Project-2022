import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Setting } from '../models/setting.model';

export const ADD_SETTING = '[SETTING] Add';
export const REMOVE_SETTING = '[SETTING] Remove';

export const AddSetting = createAction(
  '[Setting] Add',
  props<{ payload: Setting }>()
);
export const RemoveSetting = createAction(
  '[SETTING] Remove',
  props<{ payload: Setting }>()
);
