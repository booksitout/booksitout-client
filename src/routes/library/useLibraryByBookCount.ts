import { useEffect, useState } from 'react'
import LibraryResponse from './near/LibraryNearResponse'
import { BooksitoutServer } from '../../config/BooksitoutServer'
import ApiUrls from '../../ApiUrls'

const useLibraryByBookCount = () => {
	const [libraries, setLibraries] = useState<LibraryResponse[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		BooksitoutServer
			.get(ApiUrls.Library.GET_ALL_BY_BOOK_COUNT)
			.then(res => setLibraries(res.data))
			.finally(() => setIsLoading(false))
	}, [])

    return [libraries, isLoading] as const
}

export default useLibraryByBookCount
