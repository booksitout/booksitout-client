import { useLoaderData, useParams } from 'react-router-dom'
import UserProfileCard from './UserProfileCard'
import UserSharingBookCard from './UserSharingBookCard'
import { PublicUserType } from '../../types/UserType'
import { BookType } from '../community/post/PostType'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import { booksitoutServer } from '../../config/axios'
import RouteContainer from '../common/RouteContainer'

interface LoaderData {
	user: PublicUserType;
	bookList: BookType[];
}

export async function loader({ params }) {
	const nickName = params.nickName

	const fetchUser = booksitoutServer.get(`/v4/user/public-user/by-name?name=${nickName}`).then(res => res.data)
	const fetchBooks = booksitoutServer.get(`/v4/book/sharing?name=${nickName}&size=7`).then((res) => res.data)

	const [user, bookList] = await Promise.all([fetchUser, fetchBooks]);

	return {
		user: user,
		bookList: bookList,
	} 
}

const UserRoute = () => {
	const { nickName } = useParams()
	const { user, bookList } = useLoaderData() as LoaderData

	return (
		<RouteContainer>
			<RouteTitle icon={<booksitoutIcon.user />} title={'유저 정보'} subTitle={null} currentKey={undefined} buttons={[]} rightUi={null} />

			<UserProfileCard user={user} />
			<div className='mb-4' />

			<UserSharingBookCard bookList={bookList} nickName={nickName} />
			<div className='mb-4' />
		</RouteContainer>
	)
}

export default UserRoute
