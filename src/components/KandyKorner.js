import { BrowserRouter as Router } from "react-router-dom"
import { ApplicationView } from "./ApplicationView"
import { NavBar } from "./nav/NavBar"

export const KandyKorner = () => {
    return (
        <>
            <Router>
                <NavBar />
                <ApplicationView />
            </Router>
        </>
    )
}