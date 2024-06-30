import { useEffect, useState } from "react"
import { BooksitoutServer } from "../../config/BooksitoutServer"
import ApiUrls from "../../ApiUrls"
import BookResponse from "./BookResponse"

const useBookLastRead = () => {
    const [book, setBook] = useState<BookResponse | null>(null)
    
    useEffect(() => {
        BooksitoutServer
            .get(ApiUrls.Book.LastRead())
            .then((res) => setBook(res.data))
    }, [])

    return book
}

export default useBookLastRead