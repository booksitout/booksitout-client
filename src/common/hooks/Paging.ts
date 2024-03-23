export default interface Paging {
	hasMore: boolean
	totalPages: number
	fetchNext: () => void
}
