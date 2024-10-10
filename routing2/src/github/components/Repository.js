import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/header.css"

const tabs = [
    {
        tabName: "Code",
        icon: "code",
        to: "/"
    },
    {
        icon: "bug_report",
        tabName: "Issues",
        to: "/issues"
    },
    {
        icon: "autorenew",
        tabName: "Pull Request",
        to: "/pulls"
    }
];

const TopBar = () => {
    const location = useLocation();

    return (
        <header>
            <div className="links">
                {
                    tabs.map((tab, index) => {
                        return (
                            <Link className={`link ${location.pathname === tab.to ? 'active' : ''}`} to={tab.to} key={index}>
                                <span className="material-icons">{tab.icon}</span>
                                <span>{tab.tabName}</span>
                            </Link>
                        );
                    })
                }
            </div>
        </header>
    );
}

export const Repository = () => {
    return <>
        <TopBar />
        <Outlet />
    </>;
}