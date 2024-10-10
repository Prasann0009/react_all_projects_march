import { useEffect } from "react"
import { tabStateKeys } from "../redux/tabsReducer";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "./User";
import { Button, Spin } from "antd";
import { fetchFollowings } from "../redux/thunk";
import { TabIds } from "../redux/tabsActions";

export const Following = () => {

    const dispatch = useDispatch();
    const { apiStatus, data } = useSelector((state) => state.tabs[tabStateKeys.following]);

    useEffect(() => {
        dispatch(fetchFollowings);
    }, []);

    if (apiStatus === "pending" || apiStatus === "init") return <Spin />

    if (apiStatus === "error") return <Button onClick={() => dispatch(fetchFollowings)}>Retry</Button>


    return (
        <div className="users-list">
            {
                data.map(user => <UserCard key={user._id} user={user} onClickBtn={() => { }} tabId={TabIds.FOLLOWING} />)
            }
        </div>
    );
}