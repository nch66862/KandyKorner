import { useContext, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeCard } from "./EmployeeCard"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
            .then(getEmployees)
    }, [])

    return (
        <section className="employees">
            <h3>Employees</h3>
            {employees.map(employee => {
                const matchingLocation = locations.find(location => location.id === employee.locationId)
                return <EmployeeCard key={employee.id} employeeObj={employee} locationObj={matchingLocation}></EmployeeCard>
            })}
        </section>
    )
}