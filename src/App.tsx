import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Root from './common/Root'
import NotFound from './common/NotFound'
import Error from './common/Error'
import IndexRoute from './routes/index/IndexRoute'
import PrivacyRoute from './routes/privacy/PrivacyRoute'
import PrivacyByDate from './routes/privacy/PrivacyByDate'
import OAuthRedirect from './routes/login/OAuthRedirect'
import SearchBookRoute from './routes/search/book/SearchBookRoute'
import SearchBookSourceRoute from './routes/search/booksource/SearchBookSourceRoute'
import AdminTipsRoute from './routes/admin/AdminTipsRoute'
import AdminRoute from './routes/admin/AdminRoute'
import LibraryDetailRoute from './routes/library/find/LibraryDetailRoute'
import CommunityRoute from './routes/community/CommunityRoute'
import LibraryRoute from './routes/library/find/LibraryRoute'
import BookRoute from './routes/book/BookRoute'
import LibraryNearRoute from './routes/library/near/LibraryNearRoute'
import LibraryMembershipRoute from './routes/library/membership/LibraryMembershipRoute'
import CommunityTipsRoute from './routes/community/tips/CommunityTipsRou'
import CommunityTipsDetailRoute from './routes/community/tips/CommunityTipsDetailRoute'
import CommunityPopularBooksRoute from './routes/community/popular-books/CommunityPopularBooksRoute'
import BookStatisticsRoute from './routes/book/statitics/BookStatisticsRoute'
import BookMineRoute from './routes/book/mine/BookMineRoute'
import LibraryMembershipDetailRoute from './routes/library/membership/LibraryMembershipDetailRoute'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />} errorElement={<Error />}>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<IndexRoute />} />

			<Route path='/book' element={<BookRoute />} />
			<Route path='/book/users' element={<></>} />
			<Route path='/book/users/:userId' element={<></>} />
			<Route path='/book/mine' element={<BookMineRoute />} />af
			<Route path='/book/:bookId' element={<></>} />
			<Route path='/book/:bookId/reading' element={<></>} />
			<Route path='/book/goal' element={<></>} />
			<Route path='/book/statistics' element={<BookStatisticsRoute />} />

			<Route path='/library' element={<LibraryRoute />} />
			<Route path='/library/near' element={<LibraryNearRoute />} />
			<Route path='/library/:libraryId' element={<LibraryDetailRoute />} />
			<Route path='/library/by-region/:region' />
			<Route path='/library/by-region/:region/:regionDetail' />
			<Route path='/library/membership' element={<LibraryMembershipRoute />} />
			<Route path='/library/membership/:membershipId' element={<LibraryMembershipDetailRoute />} />

			<Route path='/community' element={<CommunityRoute />} />
			<Route path='/community/tips' element={<CommunityTipsRoute />} />
			<Route path='/community/tips/:tipsId' element={<CommunityTipsDetailRoute />} />
			<Route path='/community/popular-books' element={<CommunityPopularBooksRoute />} />

			<Route path='/search' element={<SearchBookRoute />} />
			<Route path='/search/:isbn13' element={<SearchBookSourceRoute />} />

			<Route path='/login/oauth/:provider' element={<OAuthRedirect />} />

			<Route path='/admin' element={<AdminRoute />} />
			<Route path='/admin/tips/:id' element={<AdminTipsRoute />} />

			<Route path='/privacy' element={<PrivacyRoute />} />
			<Route path='/privacy/:date' element={<PrivacyByDate />} />
		</Route>
	),
)

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
