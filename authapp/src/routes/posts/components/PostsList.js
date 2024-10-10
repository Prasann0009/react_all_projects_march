import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../user-info-thunk";
import { Post } from "./Post";

export const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.user.posts);

    useEffect(() => {
        dispatch(fetchAllPosts);
    }, []);

    if (posts === null) return <p>Loading ...</p>

    return <div className="posts-container">
        {
            posts.map(post => {
                return (
                    <Post key={post._id} post={post} />
                );
            })
        }
    </div>
}