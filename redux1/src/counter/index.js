import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { Counter } from "./components/Counter";
import { AgeCounter } from "./components/AgeCounter";

export const ReduxApp = () => {
    return (
        <>
            <Provider store={store}>
                <Counter />
                <AgeCounter />
            </Provider>
        </>
    );
}

// Counter();