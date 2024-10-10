import { ImagesList } from "./components/ImagesList";
import { Pagination } from "./components/Pagination";
import { SearchBar } from "./components/SearchBar";
import "./styles/index.scss";
import data from "./data";
import { useEffect, useState } from "react";
import axios from "axios";

const ImageBazzarApp = () => {
    /**
     * <SearchBar />
     * <Pagination />
     * <ImagesList />
     */
    // apiStatus: init | pending | error | success
    const [pageNumber, setPageNumber] = useState(1);
    const [query, setQuery] = useState('nature');
    const [serverResponse, setServerResponse] = useState(null);
    const [apiStatus, setApiStatus] = useState("init");

    const updateQuery = (newQuery) => {
        setQuery(newQuery);
        setPageNumber(1);
    }

    useEffect(() => {
        setApiStatus("pending");
        (async function () {
            try {
                const response = await axios({
                    url: `https://api.unsplash.com/search/photos`,
                    params: {
                        page: pageNumber,
                        query,
                        client_id: "6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U"
                    },
                    method: "GET"
                });
                setServerResponse(response.data);
                setApiStatus("success");
            }
            catch (error) {
                alert("Something went wrong");
                setApiStatus("error");
            }
        })();
    }, [pageNumber, query]);

    return (
        <div className="container">
            <SearchBar updateQuery={updateQuery} apiStatus={apiStatus} />
            <ImagesList list={serverResponse?.results} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} apiStatus={apiStatus} />
        </div>
    );
}

export default ImageBazzarApp;