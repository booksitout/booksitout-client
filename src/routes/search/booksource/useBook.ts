import { useEffect, useState } from "react"
import { BooksitoutServer } from "../../../config/BooksitoutServer"
import SearchBookResponse from "../book/SearchBookResponse"

const useBook = (isbn13: string) => {
    const [book, setBook] = useState<SearchBookResponse | null>(null)

    useEffect(() => {
        if (isbn13 !== '') {
            BooksitoutServer
                .get(`/v1/book/search/by-isbn?isbn=${isbn13}`)
                .then((res) => setBook(res.data))
        }
    }, [isbn13])

    return book
}

export default useBook