interface BookReadingSessionResponse {
    id: number
    startPage: number | null
    endPage: number | null
    startTime: Date | null
    endTime: Date | null
    readTimeInMinutes: number
}

export default BookReadingSessionResponse