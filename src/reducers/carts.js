import * as types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var inititalState = data ? data : [];

var findIndex = (carts, id) => {
    var result = -1;
    carts.forEach((cart, index) => {
        if(cart.product.id === id) {
            result = index;
        }
    });
    return result;
};

const carts = (state = inititalState, action) => {
    var {product, quantity, cart} = action;
    switch(action.type) {
        case types.ADD_TO_CART:
            var result = 0;
            for(var i = 0 ; i < state.length ; i++) {
                if(state[i].product.id === action.product.id) {
                    result++;
                    state[i].quantity++;
                }
            }
            if(result === 0) {
                state.push({
                    product: product,
                    quantity: quantity,
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            console.log(action);
            return [...state];
        case types.REMOVE_FROM_CART:
            var result = 0;
            console.log(action);
            var index = findIndex(state, action.cart.product.id);
            console.log(index);
            // if(state[index].quantity <= 1) {
            //     state.splice(index, 1);
            // }else{
            //     state[index].quantity--;
            // }
            state.splice(index, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_UP_CART:
            console.log(action);
            var index = findIndex(state, action.cart.product.id);
            state[index].quantity += action.quantity;
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_DOWN_CART:
            var index = findIndex(state, action.cart.product.id);
            if(state[index].quantity <= 1) {
                state.splice(index, 1);
            }else{
                state[index].quantity -= action.quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
        default: return [...state];
    }
}

export default carts;