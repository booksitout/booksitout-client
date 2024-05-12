import BookMemoResponse from "./BookMemoResponse"
import BookReadingSessionResponse from "./BookReadingSessionResponse"
import BookResponse from "./BookResponse"

interface BookDetailResponse {
	book: BookResponse
	memos: BookMemoResponse[]
	readingSessions: BookReadingSessionResponse[]
}

export default BookDetailResponse