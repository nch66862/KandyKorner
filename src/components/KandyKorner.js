import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import { ApplicationView } from "./ApplicationView"
import { NavBar } from "./nav/NavBar"
import { RegisterForm } from "./registrations/RegistrationForm"
import { LoginForm } from "./registrations/LoginForm"

export const KandyKorner = () => {
    return (
        <Router>
            <Route
                render={() => {
                    if (localStorage.getItem("kandy_customer")) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationView />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <Route path="/login">
                <LoginForm />
            </Route>
            <Route path="/register">
                <RegisterForm />
            </Route>
        </Router>
    )
}