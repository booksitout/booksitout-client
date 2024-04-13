import { useEffect, useState } from "react"
import { booksitoutServer } from "../../../config/booksitoutServer"
import SearchBookResponse from "../book/SearchBookResponse"

const useBook = (isbn13: string) => {
    const [book, setBook] = useState<SearchBookResponse | null>(null)

    useEffect(() => {
        if (isbn13 !== '') {
            booksitoutServer
                .get(`/v1/book/search/by-isbn?isbn=${isbn13}`)
                .then((res) => setBook(res.data))
        }
    }, [isbn13])

    return book
}

export default useBook