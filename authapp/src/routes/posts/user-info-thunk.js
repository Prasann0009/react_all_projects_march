import axios from "axios";

const token = localStorage.getItem("token");
export async function fetchUserInfo(dispatch) {
    try {
        const response = await axios({
            url: "http://localhost:8080/user/info",
            method: "GET",
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });
        dispatch({ type: "USER_INFO_SUCCESS", payload: response.data })
    }
    catch (error) {
        alert("Failed to fetch user info");
    }
}

export async function fetchAllPosts(dispatch) {
    try {
        const response = await axios({
            url: "http://localhost:8080/post/all",
            method: "GET",
            headers: {
                Authorization: `Bearer: ${token}`
            }
        });
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data })
    }
    catch (error) {
        alert("Failed to fetch posts")
    }
}

export function fetchAllComments(postId) {
    return async function fetchComments(dispatch, getState) {
        try {
            const response = await axios({
                url: "http://localhost:8080/post/comments",
                params: {
                    postId
                },
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            });
            dispatch({
                type: "COMMENTS_FETCH_SUCCESS",
                payload: {
                    postId,
                    comments: response.data.comments
                }
            });
        }
        catch (error) {
            alert("Failed to fetch comments");
        }
    }
}


export function createPost(postInfo) {
    return async function (dispatch) {
        try {
            dispatch({ type: "CREATE_POST_APISTATUS", payload: "pending" });
            const response = await axios({
                url: "http://localhost:8080/post/create",
                method: "POST",
                data: postInfo,
                headers: {
                    Authorization: `Bearer: ${token}`
                }
            });
            console.log(response);
            fetchAllPosts(dispatch);
            dispatch({ type: "CREATE_POST_APISTATUS", payload: "success" });
        }
        catch (error) {
            alert("Error creating the post");
            dispatch({ type: "CREATE_POST_APISTATUS", payload: "error" });
        }
    }
}