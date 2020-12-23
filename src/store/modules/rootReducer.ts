import { combineReducers } from "redux";
import cart from "./cart/reducer";

const rootReducer = combineReducers({
  cart: cart
});

export default rootReducer;
