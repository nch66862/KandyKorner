export const EmployeeCard = ({ employeeObj, locationObj }) => {
    let isManager = "No"
    let isFullTime = "No"
    if (employeeObj.manager) {
        isManager = "Yes"
    }
    if (employeeObj.fullTime) {
        isFullTime = "Yes"
    }
    return (
        <section>
            <p>{employeeObj.name}</p>
            <p>Assignment: {locationObj.name}</p>
            <p>Manager: {isManager}</p>
            <p>Full-Time: {isFullTime}</p>
            <p>Hourly Rate: ${employeeObj.hourlyRate}</p>
        </section>
    )
}