import { useEffect, useState } from "react"
import { SearchBookSourceUsedOnlineResponse } from "./SearchBookSourceUsedResponse"
import { booksitoutServer } from "../../../config/axios"

const useBookUsedOnline = (isbn13: string) => {
    const [books, setBooks] = useState<SearchBookSourceUsedOnlineResponse[]>([])

    useEffect(() => {
        if (isbn13 !== '') {
            booksitoutServer
                .get(`/v1/book/search/sources/used/online?isbn13=${isbn13}&sources=ONLINE_ALADIN,ONLINE_KYOBO,ONLINE_YES24,ONLINE_INTERPARK`)
                .then((res) => setBooks(res.data))
        }
    }, [isbn13])

    return books
}

export default useBookUsedOnline