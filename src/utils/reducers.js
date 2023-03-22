import { SET_CURRENT_USER, SET_NEW_LOCATION, TOGGLE_UNITS } from './action';
import { isEmpty } from './helper';

export default function (state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case SET_NEW_LOCATION:
      return {
        data: action.payload,
      };
    case TOGGLE_UNITS:
      return action.payload;
    default:
      return state;
  }
}
