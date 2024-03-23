interface BookStatisticsResponse {
    year: number
    yearStatistics: Year
    dayStatistics: Day
}

interface Year {
    totalReadTime: number
    totalReadBookCount: number
    totalReadPage: number
    averageStar: number
}

interface Day {
    averageReadTime: number
    mostReadTime: number
}

export default BookStatisticsResponse