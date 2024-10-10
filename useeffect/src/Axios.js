import axios from "axios";
import { useEffect, useState } from "react";


export const AxiosUsage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // (async function () {
        //     const response = await fetch("https://api.postalpincode.in/pincode/800006")
        //     const data = await response.json();
        //     setData(data);
        // })();

        // statu code : 200 => 299
        // status code: 300 => 399 => redirection
        // statuc code: 400 => 499 => client errors
        // status code: 500 => 599 => server errors

        // axios({
        //     url: "https://api.postalpincode.in/pincode/800006",
        //     method: "GET"
        // }).then(data => {
        //     console.log(data);
        // })

        (async function () {
            const pincode = 506163;
            const response = await axios({
                url: `https://api.postalpincode.in/pincode/${pincode}`,
                method: "GET",
                params: {
                    a: 1,
                    b: 2,
                    c: 3
                }
            });
            console.log(response);
            setData(response.data)
        })();
    }, [])

    if (data === null) return <p>Loading ...</p>

    return (
        <>
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    );
}