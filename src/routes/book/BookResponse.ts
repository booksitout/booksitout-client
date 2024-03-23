interface BookResponse {
    id: number
    isbn: string | null
    title: string
    author: string
    cover: string | null
    description: string | null

    currentPage: number
    endPage: number
    isGiveUp: boolean
    rating: number | null
    doneYear: number | null
}

export default BookResponse