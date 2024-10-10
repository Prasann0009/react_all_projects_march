const intialState = {
    info: null,
    posts: null,
    comments: {},
    createPost: {
        apiStatus: "init"
    }
}

export const userInfoReducer = (state = intialState, action) => {
    switch (action.type) {
        case "USER_INFO_SUCCESS": {
            return { ...state, info: action.payload }
        }
        case "FETCH_POSTS_SUCCESS": {
            return { ...state, posts: action.payload }
        }
        case "COMMENTS_FETCH_SUCCESS": {
            const comments = state.comments;
            const postid = action.payload.postId;
            const postComments = action.payload.comments;
            return { ...state, comments: { ...comments, [postid]: postComments } };
        }
        case "CREATE_POST_APISTATUS": {
            return { ...state, createPost: { apiStatus: action.payload } };
        }
        default: {
            return state;
        }
    }
}