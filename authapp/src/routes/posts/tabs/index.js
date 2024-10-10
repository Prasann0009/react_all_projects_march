import { Tabs } from "antd";
import { Suggestions } from "./components/Suggestions";
import "../styles/tabs.scss";
import { Followers } from "./components/Followers";
import { Following } from "./components/Following";
import { TabIds } from "./redux/tabsActions";

const tabOptions = [
    {
        key: TabIds.FOLLOWERS,
        label: "Followers",
        children: <Followers />
    },
    {
        key: TabIds.FOLLOWING,
        label: "Following",
        children: <Following />
    },
    {
        key: TabIds.SUGGESTIONS,
        label: "Suggestions",
        children: <Suggestions />
    }
]

const UserTabs = () => {
    return (
        <div className="root-tabs-container">
            <Tabs defaultActiveKey="FOLLWERS" items={tabOptions} />
        </div>
    );
}

export default UserTabs;