import { useContext, useEffect } from "react"
import { LocationCard } from "./LocationCard"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <section className="locations">
            <h3>Locations</h3>
            {locations.map(location => {
                return <LocationCard key={location.id} locationObj={location}></LocationCard>
            })}
        </section>
    )
}