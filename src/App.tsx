import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Root from './common/Root'
import NotFound from './common/NotFound'
import Error from './common/Error'
import IndexRoute from './routes/index/IndexRoute'
import PrivacyRoute from './routes/privacy/PrivacyRoute'
import PrivacyByDate from './routes/privacy/PrivacyByDate'
import OAuthRedirect from './routes/login/OAuthRedirect'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<Error />}>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<IndexRoute />} />

			<Route path="/login/oauth/:provider" element={<OAuthRedirect />} />

			<Route path="/privacy" element={<PrivacyRoute />} />
			<Route path="/privacy/:date" element={<PrivacyByDate />} />
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
