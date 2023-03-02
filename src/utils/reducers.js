import { SET_CURRENT_USER, SET_NEW_LOCATION, TOGGLE_UNITS } from './action';
import isEmpty from './helper';

export default function (state, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        // userProfile: action.userProfile
      };
    case SET_NEW_LOCATION:
      return {
        data: action.payload,
      };
    case TOGGLE_UNITS:
      return {
        
      }
    
    // case LOG_OUT_USER:
    //   return {
    //   };
    default:
      return state;
  }
}
