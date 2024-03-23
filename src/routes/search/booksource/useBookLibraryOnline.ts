import { useEffect, useState } from "react"
import { SearchBookSourceLibraryOnlineResponse } from "./SearchBookSourceLibraryResponse"
import { booksitoutServer } from "../../../config/axios"

const useBookLibraryOnline = (isbn13: string, query: string) => {
    const [books, setBooks] = useState<SearchBookSourceLibraryOnlineResponse[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isbn13 !== '' && query !=='') {
            booksitoutServer
                .get(`/v1/book/search/sources/library/online?isbn13=${isbn13}&query=${query}&sources=SEOUL_LIBRARY,SEOUL_EDUCATION_LIBRARY,NATIONAL_ASSEMBLY_LIBRARY,GYEONGGI_EDUCATION_LIBRARY,GWANGHWAMUN_LIBRARY,SEOUL_CONGRESS_LIBRARY`)
                .then((res) => setBooks(res.data))
                .finally(() => setIsLoading(false))
        }
    }, [isbn13, query])

    return [books, isLoading]  as const
}

export default useBookLibraryOnline