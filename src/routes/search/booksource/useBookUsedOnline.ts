import { useEffect, useState } from "react"
import { SearchBookSourceUsedOnlineResponse } from "./SearchBookSourceUsedResponse"
import { booksitoutServer } from "../../../config/booksitoutServer"

const useBookUsedOnline = (isbn13: string, query: string) => {
    const [books, setBooks] = useState<SearchBookSourceUsedOnlineResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isbn13 !== '' && query !=='') {
            booksitoutServer
                .get(`/v1/book/search/sources/used/online?isbn13=${isbn13}&query=${query}&sources=ONLINE_ALADIN,ONLINE_KYOBO,ONLINE_YES24,ONLINE_INTERPARK`)
                .then((res) => setBooks(res.data))
                .finally(() => setIsLoading(false))
        }
    }, [isbn13, query])

    return [books, isLoading] as const
}

export default useBookUsedOnline