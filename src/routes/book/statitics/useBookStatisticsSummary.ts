import { useEffect, useState } from "react"
import BookStatisticsResponse from "./BookStatisticsResponse"
import { BooksitoutServer } from "../../../config/BooksitoutServer"
import ApiUrls from "../../../ApiUrls"

const useBookStatisticsSummary = (year: number) => {
    const [isLoading, setIsLoading] = useState(true)
	const [statistics, setStatistics] = useState<BookStatisticsResponse | null>(null)

    const DEFAULT = {
        year: year,
        yearStatistics: {
            totalReadTime: 0,
            totalReadBookCount: 0,
            totalReadPage: 0,
            averageStar: 0
        },
        dayStatistics: {
            averageReadTime: 0,
            mostReadTime: 0
        }
    }

	useEffect(() => {
        BooksitoutServer
            .get(ApiUrls.Book.Statistics.Summary(year))
            .then((res) => setStatistics(res.data))
            .finally(() => setIsLoading(false))
    }, [year])

    return [statistics ?? DEFAULT, isLoading]
}

export default useBookStatisticsSummary