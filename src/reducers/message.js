import * as types from '../constants/ActionTypes';
import * as mesages from '../constants/Message';
var inititalState = mesages.MSG_WELCOME;

const carts = (state = inititalState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            state = action.message;
            return [...state];
        default: return [...state];
    }
}

export default carts;