import { Button, Spin } from "antd";
import { useContext, useEffect, useState } from "react";
import { fetchAllUsers } from "./user-details";
import "../../styles/table.scss";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

const Home = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { setIsUserLoggedIn } = useContext(LoginContext);

    useEffect(() => {
        setApiStatus("pending");
        (async function () {
            const { success, data, redirect } = await fetchAllUsers();
            if (redirect) {
                setIsUserLoggedIn(false);
                navigate("/login");
            }
            if (success) {
                setUsers(data);
                setApiStatus("success");
            }
            else setApiStatus("error");
        })();
    }, []);

    if (apiStatus === "init" || apiStatus === "pending") {
        return <Spin />
    }

    if (apiStatus === "error") {
        return <Button>Retry</Button>
    }

    const columns = Object.keys(users[0]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => <th key={index}>{column}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {
                                        columns.map((column, colIndex) => {
                                            return <td key={colIndex}>{user[column]}</td>
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;