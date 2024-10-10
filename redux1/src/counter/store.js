import { legacy_createStore as createStore } from "redux";

const intialState = {
    count: 0,
    age: 23
};

export const actions = {
    INC: "INC",
    DEC: "DEC",
    RESET: "RESET",
    AGE_INC: "AGE_INC",
    AGE_DEC: "AGE_DEC"
};

const reducer = (previousState = intialState, action) => {
    if (action.type === actions.INC) {
        // { count: , age: }
        // prevState = #500 
        // previousState.count += 1; // #500
        // return previousState; // #500
        return { ...previousState, count: previousState.count + 1 }; // #600
    }
    if (action.type === actions.DEC) {
        return { ...previousState, count: previousState.count - 1 };
    }
    if (action.type === actions.RESET) {
        return intialState;
    }

    if (action.type === actions.AGE_INC) {
        return { ...previousState, age: previousState.age + 1 };
    }
    if (action.type === actions.AGE_DEC) {
        return { ...previousState, age: previousState.age - 1 };
    }

    return previousState;
}

export const store = createStore(reducer);