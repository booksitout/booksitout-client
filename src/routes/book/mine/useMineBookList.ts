import { useEffect, useState } from 'react'
import BookMineListRange from './BookMineListRange'
import BookResponse from '../BookResponse'
import { booksitoutServer } from '../../../config/booksitoutServer'
import Paging from '../../../common/hooks/Paging'
import BooksByYear from './BooksByYear'

const useMineBookList = (range: BookMineListRange | null) => {
	const [page, setPage] = useState<number>(1)
	const size = 24
	const [isLast, setIsLast] = useState<boolean>(false)
	const [totalPages, setTotalPages] = useState<number>(0)
	const [isFirstFetch, setIsFirstFetch] = useState<boolean>(true)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const [books, setBooks] = useState<BookResponse[]>([])
	const [booksByYear, setBooksByYear] = useState<BooksByYear>({})

	useEffect(() => {
		if (isLast !== true && range != null) {
			booksitoutServer
				.get(`/v1/book/my-book?range=${range}&page=${page}&size=${size}`)
				.then(res => {
					setBooks(prevBook => [...prevBook, ...res.data.content])
					setIsLast(res.data.isLast)
					setTotalPages(res.data.totalPages)

					if (range === BookMineListRange.DONE) {
						setBooksByYear(groupBooksByYear([...books, ...res.data.content], booksByYear));
					} 
				})
				.finally(() => {
					setIsFirstFetch(false)
					setIsLoading(false)
				})
		}
	}, [page, range])

	useEffect(() => {
		if (!isFirstFetch) {
			setPage(1)
			setBooks([])
			setBooksByYear({})
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

	const groupBooksByYear = (books: BookResponse[], existingGroups: BooksByYear): BooksByYear => {
		const existingBookId = existingGroups ? Object.values(existingGroups).flat().map(book => book.id) : []

		return books.reduce((acc: BooksByYear, book: BookResponse) => {
			if (!book.doneYear) return acc

			const year = book.doneYear

			if (!existingBookId.includes(book.id)) {
				acc[year] = acc[year] || []
				acc[year].push(book)
			}

			return acc
		}, existingGroups)
	}

	return [isLoading, books, booksByYear, paging] as const
}

export default useMineBookList
