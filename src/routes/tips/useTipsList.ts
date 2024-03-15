import { useEffect, useState } from "react"
import TipsResponse from "./TipsResponse"
import { booksitoutServer } from "../../config/axios"
import ApiUrls from "../../ApiUrls"

export const useTipsList = () => {
    const [page, setPage] = useState<number>(0)
    const [isLast, setIsLast] = useState<boolean>(false)
    const [tipsList, setTipsList] = useState<TipsResponse[]>([])

    useEffect(() => {
        if (isLast !== true) {
            booksitoutServer
                .get(ApiUrls.Tips.List(page, 5))
                .then((res) => {
                    setTipsList(prevTips => [...prevTips, ...res.data.contents])
                    setIsLast(res.data.isLast)
                })
        }
    }, [page, isLast])

    const fetchNext = () => {
        if (isLast !== true) {
            setPage(page + 1)
        }
    }

    return [tipsList, fetchNext] 
}