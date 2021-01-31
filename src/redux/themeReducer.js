import * as Actions from './themeActions';
import { darkTheme } from '../themes/themes';
const initialState = {
  theme: darkTheme,
};
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
