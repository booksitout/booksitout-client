interface SearchHistoryResponse {
    id: number
    query: string
    date: Date
    url: string
    imageUrl: string | null
}

export default SearchHistoryResponse