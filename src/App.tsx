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
import LibraryDetailRoute from './routes/library/LibraryDetailRoute'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />} errorElement={<Error />}>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<IndexRoute />} />

			<Route path='/book' element={<></>} />

			<Route path='/community' />
			<Route path='/community/tips' />
			<Route path='/community/tips/:tipsId' />

			<Route path='/library' element={<></>} />
			<Route path='/library/near' element={<></>} />
			<Route path='/library/:libraryId' element={<LibraryDetailRoute />} />
			<Route path='/library/by-region/:region' />
			<Route path='/library/by-region/:region/:regionDetail' />
			<Route path='/library/membership' element={<></>} />
			<Route path='/library/membership/:membershipId' element={<></>} />

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
