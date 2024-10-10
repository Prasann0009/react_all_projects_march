import { useEffect, useState } from "react";
// useEffect's 1st argument function => that function should either another function or nothing.
const Pincode = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // fetch("https://api.postalpincode.in/pincode/800006")
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data);
        //     })
        //     .catch(err => {
        //         setData({ error: "Some error occured" })
        //     })
        (async function () {
            try {
                const response = await fetch("https://api.postalpincode.in/pincode/800006")
                const data = await response.json();
                setData(data);
            }
            catch (err) {
                setData({ error: "Some error occured" })
            }
        })();
    }, []);

    if (data === null) return <p>Loading ...</p>

    return (
        <>
            <h1>Pincode details</h1>
            <div style={{ width: "200px" }}>
                {JSON.stringify(data)}
            </div>
        </>
    );
}

export default Pincode