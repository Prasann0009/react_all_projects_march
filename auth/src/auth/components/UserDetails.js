import axios from "axios";
import { useEffect, useState } from "react";

export const UserDetails = ({ setIsLoggedIn }) => {
    const [apiStatus, setApiStatus] = useState("init");
    const [data, setData] = useState([]);

    useEffect(() => {
        (async function () {
            try {
                setApiStatus("pending");
                const token = localStorage.getItem("token");
                const response = await axios({
                    url: "https://node-auth-jwt-w78c.onrender.com/users",
                    method: "GET",
                    headers: {
                        Authorization: `Bearer: ${token}`
                    }
                });
                setData(response.data.result)
                setApiStatus("success");
            }
            catch (err) {
                alert(err.response.data.message);
                if (err.response.status === 401 || err.response.status === 403) {
                    // token is a dummy token
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                }
                setApiStatus("error");
            }
        })();
    }, []);

    if (apiStatus == "init" || apiStatus === "pending") return <h1>Loading ...</h1>

    if (apiStatus === "error") return <p>some error occured</p>;


    const columns = Object.keys(data[0]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            columns.map((column, index) => <th key={index}>{column}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((record, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        columns.map((column, index) => {
                                            return <td key={index}>{record[column]}</td>
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