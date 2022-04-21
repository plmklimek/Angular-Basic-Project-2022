import { Action, createReducer, on } from '@ngrx/store';
import { Setting } from '../models/setting.model';
import * as SettingActions from '../actions/setting.actions';
const initialState: Setting = {
  name: 'initial',
  text: 'test',
};
const reducer = createReducer(
  initialState,
  on(SettingActions.AddSetting, (state, action) => {
    return action.payload;
  })
);

export function settingReducer(state: Setting | undefined, action: Action) {
  return reducer(state, action);
}
// const initialState: Setting = {
//   name: 'initial',
//   text: 'test',
// };

// export function settingReducer(
//   state: Setting = initialState,
//   action: SettingActions.ac
// ) {
//   switch (action.type) {
//     case SettingActions.ADD_SETTING:
//       return action.payload;
//     case SettingActions.REMOVE_SETTING:
//       const index = action.payload;
//       const text = (state.name = state.name + index);
//       const setting: Setting = { name: text, text: text };
//       return setting;
//     default:
//       return state;
//   }
// }
