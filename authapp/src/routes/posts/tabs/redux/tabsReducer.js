import { TabActions } from "./tabsActions";

export const tabStateKeys = {
    followers: "followers",
    following: "following",
    suggestions: "suggestions"
}

const intialState = {
    [tabStateKeys.followers]: {
        apiStatus: "init",
        data: null
    },
    [tabStateKeys.following]: {
        apiStatus: "init",
        data: null,
    },
    [tabStateKeys.suggestions]: {
        apiStatus: "init",
        data: null
    }
}

export const tabsReducer = (state = intialState, action) => {
    switch (action.type) {
        case TabActions.UPDATE_APISTATUS: {
            const { key, apiStatus, data } = action.payload;
            return { ...state, [key]: { apiStatus, data: data ? data : null } };
        }
        case TabActions.MOVE_USER: {

            const { srcTab, destTab, userId } = action.payload;
            let currentUser;
            state[srcTab].data = state[srcTab].data.filter(user => {
                if (user._id === userId) {
                    currentUser = user;
                    return false;
                }
                return true;
            });
            // state[destTab].data?.push(currentUser);
            // TODO: move user object from source tabe to destination tab
            if (state[destTab].data == null) {
                state[destTab].data = [currentUser];
            }
            else state[destTab].data.push(currentUser);
            return { ...state };
        }
        default: return state;
    }
}