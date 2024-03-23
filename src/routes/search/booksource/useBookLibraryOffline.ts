import { useEffect, useState } from "react"
import { SearchBookSourceLibraryOfflineResponse } from "./SearchBookSourceLibraryResponse"
import { booksitoutServer } from "../../../config/axios"

const useBookLibraryOffline = (isbn13: string, lat: number | null, long: number | null) => {
    const [books, setBooks] = useState<SearchBookSourceLibraryOfflineResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isbn13 !== '' && lat !== null && long !== null) {
            booksitoutServer
                .get(`/v1/book/search/sources/library/offline?isbn13=${isbn13}&lat=${lat}&long=${long}`)
                .then((res) => setBooks(res.data))
                .finally(() => setIsLoading(false))
        }
    }, [isbn13, lat, long])

    return [books, isLoading] as const
}

export default useBookLibraryOffline