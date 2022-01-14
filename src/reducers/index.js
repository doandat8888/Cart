import { combineReducers } from "redux";
import products from "./products";
import carts from './carts';
import message from './message';
const appReducer = combineReducers({
    products: products,
    carts: carts,
    message: message,
});

export default appReducer;