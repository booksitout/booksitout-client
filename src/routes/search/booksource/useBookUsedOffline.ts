import { useEffect, useState } from "react"
import { SearchBookSourceUsedOfflineResponse } from "./SearchBookSourceUsedResponse"
import { booksitoutServer } from "../../../config/axios"

const useBookUsedOffline = (isbn13: string, query: string) => {
    const [books, setBooks] = useState<SearchBookSourceUsedOfflineResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isbn13 !== '' && query !=='')  {
            booksitoutServer
                .get(`/v1/book/search/sources/used/offline?isbn13=${isbn13}&query=${query}&sources=OFFLINE_ALADIN,OFFLINE_YES24`)
                .then((res) => setBooks(res.data))
                .finally(() => setIsLoading(false))
        }
    }, [isbn13, query])

    return [books, isLoading] as const
}

export default useBookUsedOffline