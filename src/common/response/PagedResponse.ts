export default interface PagedResponse<T> {
    readonly page: number,
    readonly isFirst: boolean,
    readonly isLast: boolean,
    readonly totalPages: number,
    readonly contents: T[]
}