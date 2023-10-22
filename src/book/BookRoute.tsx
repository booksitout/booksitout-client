import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BookList from './book-list/BookList'
import RouteTitle from '../common/RouteTitle'
import { BsBookHalf as BookIcon } from 'react-icons/bs'
import RouteContainer from '../common/RouteContainer'
import BookListRangeButton from './book-list/BookListRangeButton'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
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

    return (
		<RouteContainer>
			<RouteTitle icon={<BookIcon />} title={'내 책'} />

			<BookListRangeButton range={range} />
			<div className="mb-4" />

			<BookList range={range} rangeDetail={rangeDetail} />
		</RouteContainer>
	)
}

export default BookRoute