import { useEffect, useState } from 'react'
import { BooksitoutServer } from '../../../config/BooksitoutServer'
import ApiUrls from '../../../ApiUrls'

const useBookStatisticsReadTime = (duration: number) => {
	const [readTime, setReadTime] = useState<number[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		BooksitoutServer
			.get(ApiUrls.Book.Statistics.ReadTime(duration))
			.then(res => setReadTime(res.data))
			.finally(() => setIsLoading(false))
	}, [duration])

	return [readTime, isLoading] as const
}

export default useBookStatisticsReadTime
