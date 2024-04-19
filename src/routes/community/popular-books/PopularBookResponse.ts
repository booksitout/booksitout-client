interface PopularBookResponse {
    ranking: number,
    title: string,
    author: string,
    coverUrl: string | null,
    link: string,
}

export default PopularBookResponse