import { useEffect, useState } from 'react'
import BookDetailResponse from './BookDetailResponse'
import { BooksitoutServer } from '../../config/BooksitoutServer'

const useBookDetail = (bookId: number) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isError, setIsError] = useState<boolean>(false)

	const [book, setBook] = useState<BookDetailResponse | null>(null)

	useEffect(() => {
		BooksitoutServer
			.get(`/v1/book/${bookId}`)
			.then(res => setBook(res.data))
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false))
	}, [bookId])

	return [book, isLoading, isError] as const
}

export default useBookDetail
