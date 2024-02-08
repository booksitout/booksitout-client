import React from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'

import LibraryDetailModal from './LibraryDetailModal'
import MyBookSearchResult from './searchResult/MyBookSearchResult'
import LibrarySearchResult from './searchResult/LibrarySearchResult'
import OnlineLibrarySearchResult from './searchResult/OnlineLibrarySearchResult'
import SubscriptionSearchResult from './searchResult/SubscriptionSearchResult'
import OnlineUsedSearchResult from './searchResult/OnlineUsedSearchResult'
import search from '../../functions/search'
import * as BookType from '../../types/BookType'
import OfflineUsedSearchResult from './searchResult/OfflineUsedSearchResult'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import ScrollToTop from '../common/topnav/ScrollToTop'
import RouteContainer from '../common/RouteContainer'
import { booksitoutServer } from '../../config/axios'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const SearchRoute = () => {
	const { query } = useParams()

	const isLogin = useSelector((state: RootState) => state.user.isLogin)

	const [onlineUsedList, setOnlineUsedBookList] = React.useState<BookType.UsedBook[] | undefined | null>(undefined)
	const [offlineUsedList, setOfflineUsedBookList] = React.useState<BookType.UsedBook[] | undefined | null>(undefined)
	React.useEffect(() => {
		document.title = `검색 : ${query} | 책잇아웃`;

		booksitoutServer
			.get(`/v2/search/used?query=${query}&include-online=${search.local.settings.usedOnline.api()}&include-offline=${search.local.settings.usedOffline.api()}`)
			.then((res) => {
				setOnlineUsedBookList(res.data.online)
				setOfflineUsedBookList(res.data.offline)
			})
			.catch(() => {
				setOnlineUsedBookList(null)
				setOfflineUsedBookList(null)
			})
	}, [query])

	return (
		<RouteContainer>
			<ScrollToTop />
			<LibraryDetailModal />

			<RouteTitle icon={<booksitoutIcon.search />} title={'검색 결과'} subTitle={`클릭하면 책을 볼 수 있는 곳으로 이동해요`} currentKey={undefined} buttons={[]} rightUi={undefined} />

			{isLogin && <MyBookSearchResult query={query} />}
			{/* <BooksitoutSearchResultCard query={query} /> */}
			<SubscriptionSearchResult query={query} />
			<OnlineLibrarySearchResult query={query} />
			<LibrarySearchResult query={query} />
			<OnlineUsedSearchResult onlineUsedList={onlineUsedList} />
			<OfflineUsedSearchResult offlineUsedList={offlineUsedList} />
		</RouteContainer>
	)
}

export default SearchRoute
