import { useEffect, useState } from "react"
import TipsResponse from "./TipsResponse"
import { booksitoutServer } from "../../config/axios"
import ApiUrls from "../../ApiUrls"

const useTips = (tipsId: number) => {
    const [tips, setTips] = useState<TipsResponse | null>(null)

    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Tips.Single(tipsId))
            .then((res) => setTips(res.data))
    }, [tipsId])

    return tips
}

export default useTips