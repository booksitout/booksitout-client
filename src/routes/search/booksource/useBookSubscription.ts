import { useEffect, useState } from "react"
import { booksitoutServer } from "../../../config/axios"

const useBookSubscription = (isbn13: string) => {
    const [subscriptions, setSubscriptions] = useState<BookSubscriptionResponse[] | null>(null)

    useEffect(() => {
        if (isbn13 !== '') {
            booksitoutServer
                .get(`/v1/book/search/sources/subscription?isbn13=${isbn13}&sources=MILLIE,KYOBO,RIDI,YES24`)
                .then((res) => setSubscriptions(res.data))
        }
    }, [isbn13])

    return subscriptions
}

interface BookSubscriptionResponse {
    link: string
    provider: 'KYOBO' | 'RIDI' | 'YES24' | 'MILLIE'
}

export default useBookSubscription