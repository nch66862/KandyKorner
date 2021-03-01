import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"

export const ApplicationView = () => {
    return (
        <>
            <CustomerProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </CustomerProvider>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}