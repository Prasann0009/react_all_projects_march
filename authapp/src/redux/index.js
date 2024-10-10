import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk"
import { userInfoReducer } from "./reducer";
import { tabsReducer } from "../routes/posts/tabs/redux/tabsReducer";

const rootReducer = combineReducers({
    user: userInfoReducer,
    tabs: tabsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;