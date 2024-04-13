import { useEffect, useState } from "react"
import BookGoalResponse from "./BookGoalResponse"
import { booksitoutServer } from "../../../config/booksitoutServer"
import ApiUrls from "../../../ApiUrls"

const useBookGoal = (year: number) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [goal, setGoal] = useState<BookGoalResponse>(DEFAULT)
    const [isDone, setIsDone] = useState<boolean>(false)

    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Book.Goal.GET(year))
            .then((res) => {
                setGoal(res.data)
                setIsDone(res.data.current >= res.data.total && res.data.total !== 0)
            })
            .finally(() => setIsLoading(false))
    }, [year])

    return [goal, isDone, isLoading] as const
}

const DEFAULT = {
    year: new Date().getFullYear(),
    total: 0,
    current: 0
}

export default useBookGoal