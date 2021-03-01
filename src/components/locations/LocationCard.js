export const LocationCard = ({ locationObj }) => {
    let isHandicapAccessible = "Information Unavailable"
    if (locationObj.handicapAccessible) {
        isHandicapAccessible = "Yes"
    }
    else {
        isHandicapAccessible = "No"
    }
    return (
        <section>
            <p>Address: {locationObj.address}</p>
            <p>Handicap Accessible: {isHandicapAccessible}</p>
            <p>Square Footage: {locationObj.squareFootage}sq ft.</p>
        </section>
    )
}