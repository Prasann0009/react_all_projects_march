import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabStateKeys } from "../redux/tabsReducer";
import { Button, Spin } from "antd";
import { fetchAllFollowers } from "../redux/thunk";
import { UserCard } from "./User";
import { TabIds } from "../redux/tabsActions";

export const Followers = () => {
    const dispatch = useDispatch();
    const { apiStatus, data } = useSelector((state) => state.tabs[tabStateKeys.followers]);

    useEffect(() => {
        dispatch(fetchAllFollowers);
    }, []);

    if (apiStatus === "pending" || apiStatus === "init") return <Spin />

    if (apiStatus === "error") return <Button onClick={() => dispatch(fetchAllFollowers)}>Retry</Button>

    return (
        <div className="users-list">
            {
                data.map(user => (
                    <UserCard
                        user={user}
                        key={user._id}
                        onClickBtn={() => { }}
                        tabId={TabIds.FOLLOWERS}
                    />
                ))
            }
        </div>
    );
}