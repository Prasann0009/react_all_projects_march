import axios from "axios";
import { actions } from "./actions";

const delay = (ms) => {
    return new Promise((r) => setTimeout(r, ms));
}

export async function fetchProducts(dispatch, getState) {
    // await delay(2000);
    // await delay(1000);
    // dispatch({ type: "INC" })
    try {
        const response = await axios("https://fakestoreapi.com/products")
        dispatch({ type: actions.PRODUCTS_SUCCESS, payload: response.data })
    }
    catch (error) {
        console.log(error);
    }
}

