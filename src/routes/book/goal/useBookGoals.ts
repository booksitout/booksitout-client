import { useEffect, useState } from "react"
import BookGoalResponse from "./BookGoalResponse"
import { booksitoutServer } from "../../../config/booksitoutServer"
import ApiUrls from "../../../ApiUrls"

const useBookGoalsAll = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [goals, setGoals] = useState<BookGoalResponse[]>([])

    useEffect(() => {
        booksitoutServer
            .get(ApiUrls.Book.Goal.GET_ALL())
            .then((res) => {
                setGoals(res.data)
            })
            .finally(() => setIsLoading(false))
    }, [])

    return [goals, isLoading] as const
}

export default useBookGoalsAll