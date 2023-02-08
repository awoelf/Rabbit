


import { SET_CURRENT_USER } from "./action"
import isEmpty from "./helper"

export default function (state, action) {
    switch (action.type) {
        case SET_CURRENT_USER: 
        return {
            
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload,
            // userProfile: action.userProfile
        };
        // case LOG_OUT_USER:
        //   return {

        //   };
        default:
            return state;
    }
}
