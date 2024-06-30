import BookDetailResponse from "../BookDetailResponse";
import BookReadingSessionResponse from "../BookReadingSessionResponse";
import BookResponse from "../BookResponse";

interface CurrentReadingSessionResponse {
    book: BookResponse | null
    readingSession: BookReadingSessionResponse| null
}

export default CurrentReadingSessionResponse