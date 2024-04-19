import { useEffect, useState } from 'react'
import TipsResponse from './TipsResponse'
import { booksitoutServer } from '../../../config/booksitoutServer'
import ApiUrls from '../../../ApiUrls'
import Paging from '../../../common/hooks/Paging'

export const useTipsList = (size: number) => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [page, setPage] = useState<number>(0)
	const [isLast, setIsLast] = useState<boolean>(false)
	const [tipsList, setTipsList] = useState<TipsResponse[]>([])
	const [totalPages, setTotalPages] = useState<number>(0)

	useEffect(() => {
		if (isLast !== true) {
			booksitoutServer
				.get(ApiUrls.Tips.List(page, size))
				.then(res => {
					setTipsList(prevTips => [...prevTips, ...res.data.contents])
					setIsLast(res.data.isLast)
					setTotalPages(res.data.totalPages)
				})
				.finally(() => setIsLoading(false))
		}
	}, [page, isLast, size])

	const fetchNext = () => {
		setPage(page + 1)
	}

	const paging: Paging = {
		hasMore: !isLast,
		totalPages: totalPages,
		fetchNext: fetchNext,
	}

	return [isLoading, tipsList, paging] as const
}
