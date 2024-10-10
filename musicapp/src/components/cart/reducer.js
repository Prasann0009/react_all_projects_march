import { cartActions } from "./actions";

const intialState = {
    cart: {},
    totalProducts: 0,
    totalPrice: 0
}

const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case cartActions.INC_QTY: {
            // if product is already present then increment count
            // else create a key value { productId: 1 }
            let productId = action.payload.id;
            let currentCount = state.cart[productId]; // currentCount = 3
            state.cart[productId] = 1 + (currentCount ? currentCount : 0);

            state.totalProducts += 1;
            state.totalPrice += action.payload.price;

            return { ...state };
            // return { ...state, cart: 1 + (currentCount ? currentCount : 0) }
        }
        case cartActions.DEC_QTY: {
            // if the product count is > 1 decrement the count 
            // else remove the product from cart
            let productId = action.payload.id;
            let currentCount = state.cart[productId]; // currentCount > 0
            if (currentCount === 1) {
                // delete the item 
                delete state.cart[productId];
            }
            else state.cart[productId] -= 1

            state.totalProducts -= 1;
            state.totalPrice -= action.payload.price;

            return { ...state };
        }
        default: return state;
    }
}

export default cartReducer;
/**
    {
        1029: 3,
        4883: 38,
        477: 3,
        3833: 2,
    }
 */