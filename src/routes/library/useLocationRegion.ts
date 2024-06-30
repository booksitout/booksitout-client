import { useEffect, useState } from "react"
import LocationFullResponse from "./LocationFullResponse"
import { BooksitoutServer } from "../../config/BooksitoutServer"

const useLocationRegion = (q: string) => {
    const [location, setLocation] = useState<LocationFullResponse | null>(null)

    useEffect(() => {
        BooksitoutServer
            .get(`/v1/location/by-english-name?english-name=${q}`)
            .then((res) => setLocation(res.data))
    }, [q])

    return location
}

export default useLocationRegion