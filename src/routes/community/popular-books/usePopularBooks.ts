import { useEffect, useState } from "react"
import { booksitoutServer } from "../../../config/booksitoutServer"
import PopularBookResponse from "./PopularBookResponse"

export const usePopularBooks = (source: 'YES24' | 'ALADIN' | 'KYOBO' | 'BOOKSITOUT', size: number) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [popularBooks, setPopularBooks] = useState<PopularBookResponse[]>([])

    useEffect(() => {
        booksitoutServer
            .get(`/v1/book/best-seller/${source.toUpperCase()}?size=${size}` )
            .then((res) => setPopularBooks(res.data))
            .finally(() => setIsLoading(false))
    }, [size, source])

    return [isLoading, popularBooks] as const
}