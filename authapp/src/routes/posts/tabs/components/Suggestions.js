import { useEffect } from "react"
import { fetchAllSuggestions, followUser } from "../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { tabStateKeys } from "../redux/tabsReducer";
import { Button, Spin } from "antd";
import { UserCard } from "./User";
import { TabIds } from "../redux/tabsActions";

export const Suggestions = () => {
    const dispatch = useDispatch();
    const { data, apiStatus } = useSelector(state => {
        return state.tabs[tabStateKeys.suggestions]
    });

    const onClickFollowBtn = (userId) => {
        // TODO: handle follow
        // dispatch(followUser(userId));
    }

    useEffect(() => {
        dispatch(fetchAllSuggestions);
    }, []);

    if (apiStatus === "init" || apiStatus === "pending") {
        return <Spin />
    }

    if (apiStatus === "error") {
        return <Button onClick={() => dispatch(fetchAllSuggestions)}>Retry</Button>
    }

    return (
        <div className="users-list">
            {
                data.map(user => (
                    <UserCard
                        key={user._id}
                        user={user}
                        onClickBtn={() => { }}
                        tabId={TabIds.SUGGESTIONS}
                    />
                ))
            }
        </div>
    );
}