import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RouteContainer from '../common/RouteContainer'
import BookList from './book-list/BookList'
import RouteTitle from '../common/RouteTitle'
import { BsBookHalf as BookIcon } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { RouteButtonGroupType } from '../common/RouteButtonGroupType'
import toast from 'react-hot-toast'

const BookRoute = () => {
	const navigate = useNavigate()

	const isLogin = useSelector((state: RootState) => state.user.isLogin)
	const { range, rangeDetail } = useParams()

	React.useEffect(() => {
		if (!isLogin) {
			toast.error('내 책은 로그인해야 이용할 수 있어요')
			navigate('/introduction')
		}
	}, [isLogin, navigate])

	const buttons: RouteButtonGroupType[] = [
		{
			key: 'not-done',
			label: '읽고 있는 책',
			url: '/book/not-done',
		},
		{
			key: 'done',
			label: '다 읽은 책',
			url: '/book/done',
		},
		{
			key: 'give-up',
			label: '포기한 책',
			url: '/book/give-up',
		},
	]

    return (
		<RouteContainer>
			<RouteTitle icon={<BookIcon />} title={'내 책'} subTitle={'내 독서활동, 쉽고 편하게 관리할 수 있어요'} currentKey={range} buttons={buttons} rightUi={undefined} />

			<BookList range={range} rangeDetail={rangeDetail} />
		</RouteContainer>
	)
}

export default BookRoute