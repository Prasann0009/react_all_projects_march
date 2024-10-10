import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../user-info-thunk";
import { CreatePost } from "./CreatePost";

export const UserInfo = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.info);
    const createPostModalRef = useRef(null);

    const toggleModal = () => {
        createPostModalRef.current.setShow(prev => !prev);
    }

    useEffect(() => {
        dispatch(fetchUserInfo);
    }, []);

    if (userInfo === null) return <p>Loading ...</p>

    return (
        <div className="userinfo">
            <p className="title">{userInfo.name}</p>
            <div className="layer">
                <div className="add-post material-icons" onClick={toggleModal}>
                    add
                </div>
                <div className="options">
                    <div className="item">
                        <span className="value">{userInfo.posts}</span>
                        <span className="label">Posts</span>
                    </div>
                    <div className="item">
                        <span className="value">{userInfo.followers}</span>
                        <span className="label">Followers</span>
                    </div>
                    <div className="item">
                        <span className="value">{userInfo.following}</span>
                        <span className="label">Following</span>
                    </div>
                </div>
            </div>
            <CreatePost ref={createPostModalRef} />
        </div>
    )
}