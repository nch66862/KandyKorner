import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
// import "./Employee.css"
import { useHistory } from 'react-router-dom';
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeForm = () => {
    const { addEmployee, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: ""
    });

    const history = useHistory();

    useEffect(() => {
        getEmployees().then(getLocations)
    }, [])

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        let selectedVal = event.target.value
        // debugger
        if (event.target.id.includes("Id") || event.target.id.includes("Rate")) {
            selectedVal = parseInt(selectedVal)
        }
        else if (event.target.id.includes("manager") || event.target.id.includes("fullTime")) {
            selectedVal = event.target.checked
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
        console.log("Employee Object", newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault() 
        const locationId = employee.locationId
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee(employee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>{location.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Management Position:</label>
                    <input type="checkbox" id="manager" onChange={handleControlledInputChange} required autoFocus className="form-control" value={employee.manager} defaultChecked={false} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full-Time Position:</label>
                    <input type="checkbox" id="fullTime" onChange={handleControlledInputChange} required autoFocus className="form-control" value={employee.fullTime} defaultChecked={false} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Rate: $</label>
                    <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="dollars per hour" value={employee.hourlyRate} min={9} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveEmployee}>Save Employee</button>
        </form>
    )
}