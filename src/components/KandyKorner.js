import { BrowserRouter as Router } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { NavBar } from "./nav/NavBar"

export const KandyKorner = () => {
    return (
        <>
            <h1>This is Kandy Korner</h1>
            <Router>
                <NavBar />
            </Router>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </>
    )
}