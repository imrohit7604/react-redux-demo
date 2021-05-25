import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

export const rootReducer = combineReducers({
  iceCream: icecreamReducer,
  cake: cakeReducer,
});
