import { Tabs } from "antd";
import { PostsList } from "./components/PostsList";
import { UserInfo } from "./components/UserInfo";
import "./styles/index.scss";
import UserTabs from "./tabs";

const Posts = () => {
    return (
        <div className="root-posts-container">
            <div className="left-box">
                <UserInfo />
                <PostsList />
            </div>
            <div>
                <UserTabs />
            </div>
        </div>
    )
}

export default Posts;