import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "../styles/create-post.scss";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../user-info-thunk";

export const CreatePost = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const apiStatus = useSelector(state => state.user.createPost.apiStatus);

    useImperativeHandle(ref, () => {
        return {
            setShow
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const imageUrls = e.target.imageUrls.value;

        dispatch(createPost({ title, content, imageUrls }));
    }

    useEffect(() => {
        if (apiStatus === "success") {
            setShow(!show);
        }
    }, [apiStatus]);

    if (!show) return null;

    return (
        <div className="create-post-modal">
            <div className="modal-body">
                <span className="material-icons close" onClick={() => setShow(!show)}>close</span>
                <form onSubmit={onSubmit}>
                    <input name="title" placeholder="Post Title" />
                    <textarea name="content" placeholder="Content ..." ></textarea>
                    <input name="imageUrls" placeholder="image urls" type="url" />
                    <button disabled={apiStatus === "pending"}>Create Post</button>
                </form>
            </div>
        </div>
    )
})