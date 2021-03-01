import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const KandyKorner = () => {
    return (
        <>
            <h1>This is Kandy Korner</h1>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </>
    )
}