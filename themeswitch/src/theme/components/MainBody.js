import { Cards } from "./Cards"
import { Footer } from "./Footer"
import { SearchBar } from "./SearchBar"

export const MainBody = () => {
    return (
        <main style={{ width: '80%', margin: 'auto', display: "flex", flexDirection: "column", justifyContent: "space-evenly", gap: "2rem" }}>
            <SearchBar />
            <Cards />
            <Footer />
        </main>
    )
}