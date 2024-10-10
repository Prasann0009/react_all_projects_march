import axios from "axios";
import { actions } from "./actions";
// redux-thunk => helps us in acheiving the asynchronous updates to the store.
const intialState = {
    products: null,
}

function productsReducer(state = intialState, action) {
    if (action.type === actions.PRODUCTS_SUCCESS) {
        return { ...state, products: action.payload }
    }
    return state;
}

export default productsReducer;