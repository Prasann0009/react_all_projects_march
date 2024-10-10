import { useDispatch, useSelector } from "react-redux";
import { fetchAllComments } from "../user-info-thunk";
import { useState } from "react";
import { relativeTime } from "../../../utils/time";

export const Post = ({ post }) => {
    const [showComments, setShowComments] = useState(false);
    const dispatch = useDispatch();
    const comments = useSelector(state => state.user.comments[post._id]);

    const fetchComments = (postId) => {
        setShowComments(!showComments);
        !showComments && dispatch(fetchAllComments(postId));
    }

    return (
        <div className="post">
            <p>{post.title}</p>
            <p>{post.content}</p>
            <img src={post.imageUrls[0]} />
            <div className="footer">
                <div className="item">
                    <span className="material-icons">favorite</span>
                    <span className="value">{post.likesCount}</span>
                </div>
                <div className="item" onClick={() => fetchComments(post._id)}>
                    <span className="material-icons">maps_ugc</span>
                    <span className="value">{post.commentsCount}</span>
                </div>
            </div>
            {showComments &&
                <div className="comments">
                    {
                        comments?.map?.((comment, index) => {
                            return <div className="comment" key={index}>
                                <div className="item">
                                    <b>{comment.user.name}</b>
                                    <span>{`${relativeTime(comment.timeStamp)} ago`}</span>
                                </div>
                                <p>{comment.message}</p>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    );
}