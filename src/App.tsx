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
import CommunityTipsRoute from './routes/community/tips/CommunityTipsRoute'
import CommunityTipsDetailRoute from './routes/community/tips/CommunityTipsDetailRoute'
import CommunityPopularBooksRoute from './routes/community/popular-books/CommunityPopularBooksRoute'
import BookStatisticsRoute from './routes/book/statitics/BookStatisticsRoute'
import BookMineRoute from './routes/book/mine/BookMineRoute'
import LibraryMembershipDetailRoute from './routes/library/membership/LibraryMembershipDetailRoute'
import LibraryRegionRoute from './routes/library/location/LibraryRegionRoute'
import PopularBooksProviderRoute from './routes/community/popular-books/PopularBooksProviderRoute'
import LibraryMembershipAddImageRoute from './routes/library/membership/add/LibraryMembershipAddImageRoute'
import LibraryMembershipAddManualRoute from './routes/library/membership/add/LibraryMembershipAddManualRoute'
import LoginRoute from './routes/login/LoginRoute'
import BookDetailRoute from './routes/book/detail/BookDetailRoute'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />} errorElement={<Error />}>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<IndexRoute />} />

			<Route path='/book' element={<BookRoute />} />
			<Route path='/book/users' element={<></>} />
			<Route path='/book/users/:userId' element={<></>} />
			<Route path='/book/mine' element={<BookMineRoute />} />af
			<Route path='/book/mine/:bookId' element={<BookDetailRoute />} />
			<Route path='/book/mine/:bookId/reading' element={<></>} />
			<Route path='/book/goal' element={<></>} />
			<Route path='/book/statistics' element={<BookStatisticsRoute />} />

			<Route path='/library' element={<LibraryRoute />} />
			<Route path='/library/near' element={<LibraryNearRoute />} />
			<Route path='/library/:libraryId' element={<LibraryDetailRoute />} />
			<Route path='/library/by-region/:region' element={<LibraryRegionRoute />} />
			<Route path='/library/by-region/:region/:regionDetail' element={<LibraryRegionRoute />} />
			<Route path='/library/membership' element={<LibraryMembershipRoute />} />
			<Route path='/library/membership/:membershipId' element={<LibraryMembershipDetailRoute />} />

			<Route path='/community' element={<CommunityRoute />} />
			<Route path='/community/tips' element={<CommunityTipsRoute />} />
			<Route path='/community/tips/:tipsId' element={<CommunityTipsDetailRoute />} />
			<Route path='/community/popular-books' element={<CommunityPopularBooksRoute />} />
			<Route path='/community/popular-books/:provider' element={<PopularBooksProviderRoute />} />

			<Route path='/search' element={<SearchBookRoute />} />
			<Route path='/search/:isbn13' element={<SearchBookSourceRoute />} />

			<Route path='/login' element={<LoginRoute />} />
			<Route path='/login/oauth/:provider' element={<OAuthRedirect />} />

			<Route path='/admin' element={<AdminRoute />} />
			<Route path='/admin/tips/:id' element={<AdminTipsRoute />} />

			<Route path='/privacy' element={<PrivacyRoute />} />
			<Route path='/privacy/:date' element={<PrivacyByDate />} />

			<Route path='/add/book/search' element={<NotFound />} />
			<Route path='/add/book/manual' element={<NotFound />} />
			<Route path='/add/membership/image' element={<LibraryMembershipAddImageRoute />} />
			<Route path='/add/membership/manual' element={<LibraryMembershipAddManualRoute />} />
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
