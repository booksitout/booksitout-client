import { useEffect, useState } from 'react'
import { booksitoutServer } from '../../../config/booksitoutServer'
import ApiUrls from '../../../ApiUrls'

const useBookStatisticsReadTime = (duration: number) => {
	const [readTime, setReadTime] = useState<number[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		booksitoutServer
			.get(ApiUrls.Book.Statistics.ReadTime(duration))
			.then(res => setReadTime(res.data))
			.finally(() => setIsLoading(false))
	}, [duration])

	return [readTime, isLoading] as const
}

export default useBookStatisticsReadTime
