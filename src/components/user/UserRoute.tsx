import { useLoaderData, useParams } from 'react-router-dom'
import UserProfileCard from './UserProfileCard'
import UserSharingBookCard from './UserSharingBookCard'
import UserCommunityCard from './UserCommunityCard'
import { PublicUserType } from '../../types/UserType'
import { BookType, PostType } from '../community/post/PostType'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import { booksitoutServer } from '../../config/axios'
import RouteContainer from '../common/RouteContainer'

interface LoaderData {
	user: PublicUserType;
	bookList: BookType[];
	postList: PostType[];
}

export async function loader({ params }) {
	const nickName = params.nickName

	const fetchUser = booksitoutServer.get(`/v4/user/public-user/by-name?name=${nickName}`).then(res => res.data)
	const fetchBooks = booksitoutServer.get(`/v4/book/sharing?name=${nickName}&size=7`).then((res) => res.data)
	const fetchPosts = booksitoutServer.get(`/v4/forum/post/by-name?name=${nickName}`).then((res) => res.data)

	const [user, bookList, postList] = await Promise.all([fetchUser, fetchBooks, fetchPosts]);

	return {
		user: user,
		bookList: bookList,
		postList: postList,
	} 
}

const UserRoute = () => {
	const { nickName } = useParams()
	const { user, bookList, postList } = useLoaderData() as LoaderData

	return (
		<RouteContainer>
			<RouteTitle icon={<booksitoutIcon.user />} title={'유저 정보'} />

			<UserProfileCard user={user} />
			<div className='mb-4' />

			<UserSharingBookCard bookList={bookList} nickName={nickName} />
			<div className='mb-4' />

			<UserCommunityCard postList={postList} nickName={nickName} />
			<div className='mb-4' />
		</RouteContainer>
	)
}

export default UserRoute
