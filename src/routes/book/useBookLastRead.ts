import { useEffect, useState } from "react"
import { booksitoutServer } from "../../config/axios"
import ApiUrls from "../../ApiUrls"
import BookResponse from "./BookResponse"

const useBookLastRead = () => {
    const [book, setBook] = useState<BookResponse | null>(null)
    
    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Book.LastRead())
            .then((res) => setBook(res.data))
    }, [])

    return book
}

export default useBookLastRead