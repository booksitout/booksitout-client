import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Root from './common/Root'
import MainRoute from './main/MainRoute'
import NotFound from './common/NotFound'
import ErrorPage from './common/ErrorPage'

import AdminRoute from './admin/AdminRoute'

import IntroductionRoute from './info/IntroductionRoute'
import FaqRoute from './info/FaqRoute'
import FeatureRoute from './info/FeatureRoute'
import TipsRoute from './community/tips/TipsRoute'
import TipsDetail from './community/tips/TipsDetail'

import LoginRoute from './user/LoginRoute'
import OAuth from './user/OAuth'
import JoinRoute from './user/JoinRoute'

import SettingsRoute from './settings/SettingsRoute'
import SearchLibrarySettings from './settings/SearchLibrarySettings'
import SearchSettings from './settings/SearchSettings'
import CommunitySettings from './settings/CommunitySettings'
import NotificationSettings from './settings/noti/NotificationSettings'
import PersonalInfoSettings from './settings/PersonalInfoSettings'

import BookRoute from './book/BookRoute'
import BookDetail from './book/book-detail/BookDetail'
import AddBookRoute from './book/book-form/AddBookRoute'
import EditBookForm from './book/book-form/EditBookForm'

import ReadingRoute from './reading/ReadingRoute'
import ReadingNoId from './reading/ReadingNoId'

import StatisticsRoute from './statistics/StatisticsRoute'
import GoalRoute from './goal/goalRoute/GoalRoute'

import SearchRoute from './search/SearchRoute'

import CommunityRoute from './community/community-main/CommunityRoute'
import AddCommunityRoute from './community/AddCommunityRoute'

import PostRoute, { loader as postRouteLoader } from './community/post/post-route/PostRoute'
import PostDetail from './community/post/PostDetail'
import EditPostForm from './community/post/EditPostForm'

import GatheringRoute, {loader as gatheringRouteLoader} from './community/gathering/GatheringRoute'
import GatheringDetail, {loader as gatheringDetailLoader} from './community/gathering/GatheringDetail'
import GatheringJoinForm, { loader as gatheringJoinLoader } from './community/gathering/GatheringJoinForm'

import UserRoute, { loader as userRouteLoader } from './user/UserRoute'
import UserPostList, {loader as userPostListLoader} from './user/UserPostList'
import UserBookList, { loader as userBookListLoader } from './user/UserBookList'

import BookInfoRoute, { loader as bookInfoRouteLoader } from './bookInfo/BookInfoRoute'

import LibraryRoute from './library/route/LibraryRoute'
import LibraryDetail, {loader as libraryDetailLoader} from './library/detail/LibraryDetail'
import LibraryNearRoute from './library/near/LibraryNearRoute'
import LibraryRegionRoute, { loader as libraryRegionLoader } from './library/region/LibraryRegionRoute'

import MembershipDetail from './library/membership/MembershipDetail'
import MembershipRoute from './library/membership/MembershipRoute'
import MembershipAddForm from './library/membership/add/MembershipAddForm'
import MembershipEditRoute, {loader as membershipEditLoader} from './library/membership/edit/MembershipEditRoute'

import PwaRoute from './pwa/PwaRoute'
import AddRoute from './common/add/AddRoute'
import SuggestionRoute from './suggestion/SuggestionRoute'
import PrivacyRoute from './privacy/PrivacyRoute'
import PrivacyByDate from './privacy/PrivacyByDate'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route path="*" element={<NotFound />} />

			<Route path="/" element={<MainRoute />} />

			<Route path="/admin" element={<AdminRoute />} />
			<Route path="/pwa" element={<PwaRoute />} />

			<Route path="/introduction" element={<IntroductionRoute />} />
			<Route path="introduction/features" element={<FeatureRoute />} />
			<Route path="introduction/tips/:range" element={<TipsRoute />} />
			<Route path="introduction/tips/detail/:id" element={<TipsDetail />} />

			<Route path="/faq" element={<FaqRoute />} />

			<Route path="/login" element={<LoginRoute />} />
			<Route path="/login/oauth/:provider" element={<OAuth />} />
			<Route path="/join" element={<JoinRoute />} />

			<Route path="/settings" element={<SettingsRoute />} />
			<Route path="/settings/search" element={<SearchSettings />} />
			<Route path="/settings/search/library" element={<SearchLibrarySettings />} />
			<Route path="/settings/personal-info" element={<PersonalInfoSettings />} />
			<Route path="/settings/community" element={<CommunitySettings />} />
			<Route path="/settings/notification" element={<NotificationSettings />} />

			<Route path="/book/:range" element={<BookRoute />} errorElement={<ErrorPage />} />
			<Route path="/book/:range/:rangeDetail" element={<BookRoute />} errorElement={<ErrorPage />} />
			<Route path="/book/detail/:id" element={<BookDetail />} errorElement={<ErrorPage />} />
			<Route path="/book/edit/:id" element={<EditBookForm />} errorElement={<ErrorPage />} />

			<Route path="/reading" element={<ReadingNoId />} />
			<Route path="/reading/:id" element={<ReadingRoute />} />
			<Route path="/statistics" element={<StatisticsRoute />} />
			<Route path="/goal" element={<GoalRoute />} />

			<Route path="/search/:query" element={<SearchRoute />} />

			<Route path="/community" element={<CommunityRoute />} errorElement={<ErrorPage />} />

			<Route path="/community/post/all/:sortBy" element={<PostRoute />} loader={postRouteLoader} />
			<Route path="/community/post/:postId" element={<PostDetail />} />
			<Route path="/community/post/edit/:postId" element={<EditPostForm />} />

			<Route path="/community/quiz" element={<></>} />
			<Route path="/community/quiz/:quizId" element={<></>} />
			<Route path="/community/quiz/edit/:quizId" element={<></>} />

			<Route path="/community/survey" element={<></>} />
			<Route path="/community/survey/:surveyId" element={<></>} />
			<Route path="/community/survey/edit/:surveyId" element={<></>} />

			<Route path="/community/gathering/:type" element={<GatheringRoute />} loader={gatheringRouteLoader} />
			<Route
				path="/community/gathering/detail/:id"
				element={<GatheringDetail />}
				loader={gatheringDetailLoader}
			/>
			<Route path="/community/gathering/edit/:id" element={<></>} />
			<Route path="/community/gathering/join/:id" element={<GatheringJoinForm />} loader={gatheringJoinLoader} />

			<Route path="/book/info/:isbn" element={<BookInfoRoute />} loader={bookInfoRouteLoader} />
			<Route path="/book/info/:isbn/related-posts" element={<></>} />
			<Route path="/book/info/:isbn/covers" element={<></>} />

			<Route path="/user/:nickName" element={<UserRoute />} loader={userRouteLoader} />
			<Route path="/user/:nickName/books" element={<UserBookList />} loader={userBookListLoader} />
			<Route path="/user/:nickName/posts" element={<UserPostList />} loader={userPostListLoader} />

			<Route path="/user/:nickName/quizes" element={<></>} />
			<Route path="/user/:nickName/surveys" element={<></>} />
			<Route path="/user/:nickName/gatherings" element={<></>} />

			<Route path="/library" element={<LibraryRoute />} />
			<Route path="/library/detail/:id" element={<LibraryDetail />} loader={libraryDetailLoader} />
			<Route path="/library/near" element={<LibraryNearRoute />} />
			<Route
				path="/library/region/:region/:regionDetail"
				element={<LibraryRegionRoute />}
				loader={libraryRegionLoader}
			/>
			<Route path="/library/region/:region" element={<LibraryRegionRoute />} loader={libraryRegionLoader} />

			<Route path="/library/membership/all" element={<MembershipRoute />} />
			<Route path="/library/membership/:id" element={<MembershipDetail />} />
			<Route
				path="/library/membership/edit/:id"
				element={<MembershipEditRoute />}
				loader={membershipEditLoader}
			/>

			<Route path="/add" element={<AddRoute />}>
				<Route path="book/:method" element={<AddBookRoute />} />
				<Route path=":type" element={<AddCommunityRoute />} />
				<Route path="membership/:method" element={<MembershipAddForm />} />
			</Route>

			<Route path="/suggestion" element={<SuggestionRoute />} />

			<Route path="/privacy" element={<PrivacyRoute />} />
			<Route path="/privacy/:date" element={<PrivacyByDate />} />
		</Route>,
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