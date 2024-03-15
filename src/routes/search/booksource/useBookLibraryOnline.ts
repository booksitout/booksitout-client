import { useEffect, useState } from "react"
import { SearchBookSourceLibraryOnlineResponse } from "./SearchBookSourceLibraryResponse"
import { booksitoutServer } from "../../../config/axios"

const useBookLibraryOnline = (isbn13: string) => {
    const [books, setBooks] = useState<SearchBookSourceLibraryOnlineResponse[]>([])

    useEffect(() => {
        if (isbn13 !== '') {
            booksitoutServer
                .get(`/v1/book/search/sources/library/online?isbn13=${isbn13}&sources=SEOUL_LIBRARY,SEOUL_EDUCATION_LIBRARY,NATIONAL_ASSEMBLY_LIBRARY,GYEONGGI_EDUCATION_LIBRARY,GWANGHWAMUN_LIBRARY,SEOUL_CONGRESS_LIBRARY`)
                .then((res) => setBooks(res.data))
        }
    }, [isbn13])

    return books
}

export default useBookLibraryOnline