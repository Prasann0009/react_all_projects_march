import { useDispatch } from "react-redux";
import { TabIds } from "../redux/tabsActions";
import { followUser } from "../redux/thunk";

export const UserCard = ({ user, tabId }) => {
    const dispatch = useDispatch();

    let buttonText;
    if (tabId === TabIds.FOLLOWERS) {
        buttonText = user.following ? "Following" : "Follow Back";
    }
    if (tabId === TabIds.FOLLOWING) {
        buttonText = "Unfollow";
    }
    if (tabId === TabIds.SUGGESTIONS) {
        buttonText = "Follow"
    }

    const onClickBtn = () => {
        if (user.following) {

        }
        else {
            dispatch(followUser(user._id, tabId.toLowerCase()))
        }
    }

    return (
        <div className="user" key={user._id}>
            <div className="left">
                <b>{user.name}</b>
                <span className="label">{user.email}</span>
                <span className="label">{user.city}</span>
            </div>
            <div className="right">
                <button onClick={onClickBtn}>{buttonText}</button>
            </div>
        </div>
    );
}