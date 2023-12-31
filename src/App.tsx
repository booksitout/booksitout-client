import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

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
import CommunitySettings from './components/settings/CommunitySettings'
import NotificationSettings from './components/settings/noti/NotificationSettings'
import PersonalInfoSettings from './components/settings/PersonalInfoSettings'

import BookRoute from './components/book/BookRoute'
import BookDetail from './components/book/book-detail/BookDetail'
import AddBookRoute from './components/book/book-form/AddBookRoute'
import EditBookForm from './components/book/book-form/EditBookForm'

import ReadingRoute from './components/reading/ReadingRoute'
import ReadingNoId from './components/reading/ReadingNoId'

import StatisticsRoute from './components/statistics/StatisticsRoute'
import GoalRoute from './components/goal/goalRoute/GoalRoute'

import SearchRoute from './components/search/SearchRoute'

import CommunityRoute from './components/community/community-main/CommunityRoute'
import AddCommunityRoute from './components/community/AddCommunityRoute'

import PostRoute, {loader as postRouteLoader} from './components/community/post/post-route/PostRoute'
import PostDetail from './components/community/post/PostDetail'
import EditPostForm from './components/community/post/EditPostForm'

import GatheringRoute, {loader as gatheringRouteLoader} from './components/community/gathering/GatheringRoute'
import GatheringDetail, {loader as gatheringDetailLoader} from './components/community/gathering/GatheringDetail'
import GatheringJoinForm, {loader as gatheringJoinLoader} from './components/community/gathering/GatheringJoinForm'

import UserRoute, {loader as userRouteLoader} from './components/user/UserRoute'
import UserPostList, {loader as userPostListLoader} from './components/user/UserPostList'
import UserBookList, {loader as userBookListLoader} from './components/user/UserBookList'

import BookInfoRoute, {loader as bookInfoRouteLoader} from './components/bookInfo/BookInfoRoute'

import LibraryRoute from './components/library/route/LibraryRoute'
import LibraryDetail, {loader as libraryDetailLoader} from './components/library/detail/LibraryDetail'
import LibraryNearRoute from './components/library/near/LibraryNearRoute'
import LibraryRegionRoute, {loader as libraryRegionLoader} from './components/library/region/LibraryRegionRoute'

import MembershipDetail from './components/library/membership/MembershipDetail'
import MembershipRoute from './components/library/membership/MembershipRoute'
import AddMembershipRoute from './components/library/membership/add/AddMembershipRoute'
import MembershipEditRoute, {
	loader as membershipEditLoader
} from './components/library/membership/edit/MembershipEditRoute'

import PwaRoute from './components/pwa/PwaRoute'
import AddRoute from './components/common/add/AddRoute'
import PrivacyRoute from './components/privacy/PrivacyRoute'
import PrivacyByDate from './components/privacy/PrivacyByDate'
import UserProfileRedirectRoute from './components/user/UserProfileRedirectRoute'

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
			<Route path="/community/gathering/detail/:id" element={<GatheringDetail />} loader={gatheringDetailLoader}/>
			<Route path="/community/gathering/edit/:id" element={<></>} />
			<Route path="/community/gathering/join/:id" element={<GatheringJoinForm />} loader={gatheringJoinLoader} />

			<Route path="/book/info/:isbn" element={<BookInfoRoute />} loader={bookInfoRouteLoader} />
			<Route path="/book/info/:isbn/related-posts" element={<></>} />
			<Route path="/book/info/:isbn/covers" element={<></>} />

			<Route path="/user/redirect" element={<UserProfileRedirectRoute />} />
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
			<Route path="/library/membership/edit/:id" element={<MembershipEditRoute />}
				loader={membershipEditLoader}
			/>

			<Route path="/add" element={<AddRoute />}>
				<Route path="book/:method" element={<AddBookRoute />} />
				<Route path=":type" element={<AddCommunityRoute />} />
				<Route path="membership/:method" element={<AddMembershipRoute />} />
			</Route>

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
