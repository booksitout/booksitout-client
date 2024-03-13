interface SearchBookResponse {
    isbn13: string
    title: string
    subTitle: string | null
    authors: string
    cover: string
}

export default SearchBookResponse