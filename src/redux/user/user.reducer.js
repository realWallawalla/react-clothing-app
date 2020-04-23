import { UserActionType } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { //default value eq. if state is undefined then use initalstate.
    //every action will reach every reducer. therefore return state as defualt.
    switch (action.type) {
        case UserActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;