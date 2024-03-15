import { useEffect, useState } from "react"
import { SearchBookSourceUsedOfflineResponse } from "./SearchBookSourceUsedResponse"
import { booksitoutServer } from "../../../config/axios"

const useBookUsedOffline = (isbn13: string) => {
    const [books, setBooks] = useState<SearchBookSourceUsedOfflineResponse[]>([])

    useEffect(() => {
        if (isbn13 !== '')  {
            booksitoutServer
                .get(`/v1/book/search/sources/used/offline?isbn13=${isbn13}&sources=OFFLINE_ALADIN,OFFLINE_YES24`)
                .then((res) => setBooks(res.data))
        }
    }, [isbn13])

    return books
}

export default useBookUsedOffline