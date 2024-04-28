import { useEffect, useState } from 'react'
import BookMineListRange from './BookMineListRange'
import BookResponse from '../BookResponse'
import { booksitoutServer } from '../../../config/booksitoutServer'
import Paging from '../../../common/hooks/Paging'

const useMineBookList = (range: BookMineListRange | null) => {
	const [page, setPage] = useState<number>(1)
	const size = 24
	const [isLast, setIsLast] = useState<boolean>(false)
	const [totalPages, setTotalPages] = useState<number>(0)
	const [isFirstFetch, setIsFirstFetch] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const [books, setBooks] = useState<BookResponse[]>([])

	useEffect(() => {
		if (isLast !== true && range != null) {
			booksitoutServer
				.get(`/v1/book/my-book?range=${range}&page=${page}&size=${size}`)
				.then(res => {
					setBooks(prevBook => [...prevBook, ...res.data.content])
					setIsLast(res.data.isLast)
					setTotalPages(res.data.totalPages)
				})
				.finally(() => {
					setIsFirstFetch(false)
					setIsLoading(false)
				})
		}
	}, [page, isLast, range])

	useEffect(() => {
		if (!isFirstFetch) {
			setPage(1)
			setBooks([])
		}
	}, [range])

	const fetchNext = () => {
		setPage(page + 1)
	}

	const paging: Paging = {
		hasMore: !isLast,
		totalPages: totalPages,
		fetchNext: fetchNext,
	}

	return [isLoading, books, paging] as const
}

export default useMineBookList
