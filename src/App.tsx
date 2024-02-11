import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Root from './components/common/Root'
import MainRoute from './components/main/MainRoute'
import NotFound from './components/common/NotFound'
import ErrorPage from './components/common/ErrorPage'

import IntroductionRoute from './components/info/IntroductionRoute'
import FaqRoute from './components/info/FaqRoute'
import FeatureRoute from './components/info/FeatureRoute'
import TipsRoute from './components/community/tips/TipsRoute'
import TipsDetail from './components/community/tips/TipsDetail'

import LoginRoute from './components/user/LoginRoute'
import OAuth from './components/user/OAuth'

import SettingsRoute from './components/settings/SettingsRoute'
import SearchLibrarySettings from './components/settings/SearchLibrarySettings'
import SearchSettings from './components/settings/SearchSettings'
import NotificationSettings from './components/settings/noti/NotificationSettings'
import PersonalInfoSettings from './components/settings/PersonalInfoSettings'

import BookRoute from './components/book/BookRoute'
import BookDetailRoute from './components/book/book-detail/BookDetailRoute'
import AddBookRoute from './components/book/book-form/AddBookRoute'
import EditBookForm from './components/book/book-form/EditBookForm'

import ReadingRoute from './components/reading/ReadingRoute'
import ReadingNoId from './components/reading/ReadingNoId'

import StatisticsRoute from './components/statistics/StatisticsRoute'
import GoalRoute from './components/goal/goalRoute/GoalRoute'

import SearchRoute from './components/search/SearchRoute'

import CommunityRoute from './components/community/community-main/CommunityRoute'

import UserRoute, { loader as userRouteLoader } from './components/user/UserRoute'
import UserBookList, { loader as userBookListLoader } from './components/user/UserBookList'

import BookInfoRoute, { loader as bookInfoRouteLoader } from './components/bookInfo/BookInfoRoute'

import LibraryRoute from './components/library/route/LibraryRoute'
import LibraryDetail, {loader as libraryDetailLoader} from './components/library/detail/LibraryDetail'
import LibraryNearRoute from './components/library/near/LibraryNearRoute'
import LibraryRegionRoute, { loader as libraryRegionLoader } from './components/library/region/LibraryRegionRoute'

import MembershipDetail from './components/library/membership/MembershipDetail'
import MembershipRoute from './components/library/membership/MembershipRoute'
import AddMembershipRoute from './components/library/membership/add/AddMembershipRoute'
import MembershipEditRoute, {loader as membershipEditLoader} from './components/library/membership/edit/MembershipEditRoute'

import PwaRoute from './components/pwa/PwaRoute'
import AddRoute from './components/common/add/AddRoute'
import PrivacyRoute from './components/privacy/PrivacyRoute'
import PrivacyByDate from './components/privacy/PrivacyByDate'
import UserProfileRedirectRoute from './components/user/UserProfileRedirectRoute'
import AdminRoute from './components/admin/AdminRoute'
import AdminTipsRoute from './components/admin/AdminTipsRoute'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route path="*" element={<NotFound />} />

			<Route path="/" element={<MainRoute />} />

			<Route path="/pwa" element={<PwaRoute />} />

			<Route path="/introduction" element={<IntroductionRoute />} />
			<Route path="introduction/features" element={<FeatureRoute />} />

			<Route path="tips/:range" element={<TipsRoute />} />
			<Route path="tips/detail/:id" element={<TipsDetail />} />

			<Route path="/faq" element={<FaqRoute />} />

			<Route path="/login" element={<LoginRoute />} />
			<Route path="/login/oauth/:provider" element={<OAuth />} />

			<Route path="/settings" element={<SettingsRoute />} />
			<Route path="/settings/search" element={<SearchSettings />} />
			<Route path="/settings/search/library" element={<SearchLibrarySettings />} />
			<Route path="/settings/personal-info" element={<PersonalInfoSettings />} />
			<Route path="/settings/notification" element={<NotificationSettings />} />

			<Route path="/book/:range" element={<BookRoute />} errorElement={<ErrorPage />} />
			<Route path="/book/:range/:rangeDetail" element={<BookRoute />} errorElement={<ErrorPage />} />
			<Route path="/book/detail/:id" element={<BookDetailRoute />} errorElement={<ErrorPage />} />
			<Route path="/book/edit/:id" element={<EditBookForm />} errorElement={<ErrorPage />} />

			<Route path="/reading" element={<ReadingNoId />} />
			<Route path="/reading/:id" element={<ReadingRoute />} />
			<Route path="/statistics" element={<StatisticsRoute />} />
			<Route path="/goal" element={<GoalRoute />} />

			<Route path="/search/:query" element={<SearchRoute />} />

			<Route path="/community" element={<CommunityRoute />} errorElement={<ErrorPage />} />

			<Route path="/book/info/:isbn" element={<BookInfoRoute />} loader={bookInfoRouteLoader} />
			<Route path="/book/info/:isbn/related-posts" element={<></>} />
			<Route path="/book/info/:isbn/covers" element={<></>} />

			<Route path="/user/redirect" element={<UserProfileRedirectRoute />} />
			<Route path="/user/:nickName" element={<UserRoute />} loader={userRouteLoader} />
			<Route path="/user/:nickName/books" element={<UserBookList />} loader={userBookListLoader} />

			<Route path="/user/:nickName/quizes" element={<></>} />
			<Route path="/user/:nickName/surveys" element={<></>} />
			<Route path="/user/:nickName/gatherings" element={<></>} />

			<Route path="/library" element={<LibraryRoute />} />
			<Route path="/library/detail/:id" element={<LibraryDetail />} loader={libraryDetailLoader} />
			<Route path="/library/near" element={<LibraryNearRoute />} />
			<Route path="/library/region/:region/:regionDetail" element={<LibraryRegionRoute />} loader={libraryRegionLoader} />
			<Route path="/library/region/:region" element={<LibraryRegionRoute />} loader={libraryRegionLoader} />

			<Route path="/library/membership/all" element={<MembershipRoute />} />
			<Route path="/library/membership/:id" element={<MembershipDetail />} />
			<Route path="/library/membership/edit/:id" element={<MembershipEditRoute />} loader={membershipEditLoader} />

			<Route path="/admin" element={<AdminRoute />} />
			<Route path="/admin/tips/:id" element={<AdminTipsRoute />} />

			<Route path="/add" element={<AddRoute />}>
				<Route path="book/:method" element={<AddBookRoute />} />
				<Route path="membership/:method" element={<AddMembershipRoute />} />
			</Route>

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
