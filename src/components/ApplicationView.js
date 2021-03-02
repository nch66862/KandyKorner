import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { CustomerProvider } from "./customer/CustomerProvider"
// import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
// import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { EmployeeForm } from "./employees/EmployeeForm"
// import { LocationForm } from "./location/LocationForm"

export const ApplicationView = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            <ProductProvider>
                <Route>
                    <ProductList />
                </Route>
            </ProductProvider>
            {/* <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider> */}
            <EmployeeProvider>
                <LocationProvider>
                    {/* <Route exact path="/employees">
                        <EmployeeList />
                    </Route> */}
                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}