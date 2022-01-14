import * as types from './../constants/ActionTypes';
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity,

    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message: message,
    }
}

export const actRemoveFromCart = (cart, quantity) => {
    return {
        type: types.REMOVE_FROM_CART,
        cart: cart,
        quantity: quantity,
    }
}

export const actUpdateUpCart = (cart, quantity) => {
    return {
        type: types.UPDATE_UP_CART,
        cart: cart,
        quantity: quantity,
    }
}

export const actUpdateDownCart = (cart, quantity) => {
    return {
        type: types.UPDATE_DOWN_CART,
        cart: cart,
        quantity: quantity,
    }
}