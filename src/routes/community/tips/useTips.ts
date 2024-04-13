import { useEffect, useState } from "react"
import TipsResponse from "./TipsResponse"
import { booksitoutServer } from "../../../config/booksitoutServer"
import ApiUrls from "../../../ApiUrls"

const useTips = (tipsId: number) => {
    const [tips, setTips] = useState<TipsResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Tips.Single(tipsId))
            .then((res) => setTips(res.data))
            .finally(() => setIsLoading(false))
    }, [tipsId])

    return [tips, isLoading] as const
}

export default useTips