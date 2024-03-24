import { useEffect, useState } from 'react'
import LibraryResponse from './near/LibraryNearResponse'
import { booksitoutServer } from '../../config/axios'
import ApiUrls from '../../ApiUrls'

const useLibraryByBookCount = () => {
	const [libraries, setLibraries] = useState<LibraryResponse[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		booksitoutServer
			.get(ApiUrls.Library.GET_ALL_BY_BOOK_COUNT)
			.then(res => setLibraries(res.data))
			.finally(() => setIsLoading(false))
	}, [])

    return [libraries, isLoading] as const
}

export default useLibraryByBookCount
