import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import productsReducer from "./reducer";
import cartReducer from "../components/cart/reducer";

const rootReducer = combineReducers({
    x: productsReducer,
    y: cartReducer
})

/**
  overall state: 

  {
    x:{
        products: null,
    },
    y:{
        cart: {}
    }
  }
 */

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;