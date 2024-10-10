import axios from "axios";
import { TabActions } from "./tabsActions";
import { tabStateKeys } from "./tabsReducer";

const token = localStorage.getItem("token");

const delay = () => new Promise(r => setTimeout(r, 4000))

export async function fetchAllSuggestions(dispatch) {
    try {
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.suggestions,
                apiStatus: "pending"
            }
        });
        await delay();
        const response = await axios({
            url: "http://localhost:8080/user/suggestions",
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.suggestions,
                apiStatus: "success",
                data: response.data.suggestions
            }
        });
    }
    catch (error) {
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.suggestions,
                apiStatus: "error"
            }
        });
    }
}

export async function fetchAllFollowers(dispatch) {
    try {
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.followers,
                apiStatus: "pending"
            }
        });

        const response = await axios({
            url: "http://localhost:8080/user/followers",
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.followers,
                apiStatus: "success",
                data: response.data
            }
        });

    }
    catch (error) {
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.followers,
                apiStatus: "error"
            }
        });
    }
}

export async function fetchFollowings(dispatch) {
    try {
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.following,
                apiStatus: "pending"
            }
        });

        const response = await axios({
            url: "http://localhost:8080/user/following",
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.following,
                apiStatus: "success",
                data: response.data
            }
        });

    }
    catch (error) {
        dispatch({
            type: TabActions.UPDATE_APISTATUS,
            payload: {
                key: tabStateKeys.following,
                apiStatus: "error"
            }
        });
    }
}

export function followUser(userId, tabId) {
    return async function (dispatch) {
        // follow the user with id : userId
        try {
            const response = await axios({
                url: "http://localhost:8080/user/follow",
                method: "POST",
                data: {
                    userId
                },
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            });
            dispatch({
                type: TabActions.MOVE_USER,
                payload: {
                    srcTab: tabId,
                    destTab: tabStateKeys.following,
                    userId
                }
            });
        }
        catch (error) {
            alert("Failed to follow")
        }
    }
}

export function unFollowUser(userId) {
    return async function (dispatch) {
        // unfollow the user with id: userId
    }
}
