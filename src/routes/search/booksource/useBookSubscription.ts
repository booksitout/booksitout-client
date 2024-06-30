import { useEffect, useState } from "react"
import { BooksitoutServer } from "../../../config/BooksitoutServer"

const useBookSubscription = (isbn13: string, query: string) => {
    const [books, setBooks] = useState<BookSubscriptionResponse[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        if (isbn13 !== '' && query !=='') {
            BooksitoutServer
                .get(`/v1/book/search/sources/subscription?isbn13=${isbn13}&query=${query}&sources=MILLIE,KYOBO,RIDI,YES24`)
                .then((res) => setBooks(res.data))
                .finally(() => setIsLoading(false))
        }
    }, [isbn13, query])

    return [books, isLoading] as const
}

interface BookSubscriptionResponse {
	link: string
	provider: 'SUBSCRIPTION_KYOBO' | 'SUBSCRIPTION_RIDI' | 'SUBSCRIPTION_YES24' | 'SUBSCRIPTION_MILLIE'
}

export default useBookSubscription