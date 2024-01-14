import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import toast from 'react-hot-toast'
import Loading from '../common/Loading'
import Error from '../common/Error'
import Timer from './Timer'
import MemoCard from './MemoCard'
import EndReadingSessionModal from './EndReadingSessionModal'
import PageProgressBar from '../common/PageProgressBar'
import MemoDetailModal from '../book/book-detail/memo/MemoDetailModal'
import defaultBookCover from '../../images/placeholder/default-book-cover.png'
import { getBookOfCurrentReadingSession, startReadingSession } from '../../functions/reading'
import { getMemoListOfBook } from '../../functions/memo'
import uiSettings from '../settings/ui'
import { useDispatch, useSelector } from 'react-redux'
import { pauseTimer, resumeTimer, toggleTimer } from '../../redux/timerSlice'
import messages from '../settings/messages'
import { RootState } from '../../redux/store'
import { BookUserType } from '../../types/BookType'
import { MemoType } from '../../types/MemoType'
import RouteContainer from '../common/RouteContainer'
import styled from 'styled-components';

const ReadingRoute = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const isTimerOn = useSelector((state: RootState) => state.timer.isTimerOn)

	const [initialFetch, setInitialFetch] = React.useState<boolean>(true)
	const [isLoading, setIsLoading] = React.useState<boolean>(true)
	const [isError, setIsError] = React.useState<boolean>(false)
	const [book, setBook] = React.useState<BookUserType | null>(null)

	const [isEndReadingSessionModalOpen, setIsEndReadingSessionModalOpen] = React.useState(false)
	const showEndReadingSessionModal = () => {
		setIsEndReadingSessionModalOpen(true)
		dispatch(pauseTimer())
	}

	const [memoList, setMemoList] = React.useState<MemoType[] | null>(null)
	const [isMemoDetailModalOpen, setIsMemoDetailModalOpen] = React.useState<boolean>(false)
	const [selectedMemo, setSelectedMemo] = React.useState<MemoType | null>(null)

	React.useEffect(() => {
		dispatch(resumeTimer())

		setTimeout(() => {
			setInitialFetch(false)
		}, uiSettings.initalFetchTime)

		getBookOfCurrentReadingSession()
			.then((book) => {
				if (book == null) {
					getMemoListOfBook(id).then((memos) => setMemoList(memos))

					startReadingSession(id).then((res) => {
						if (res[0]) {
							setBook(res[1])
						} else {
							setIsError(true)
							toast.error(messages.error)
						}
					})
				} else {
					if (Number(id) !== Number(book.id)) {
						toast.error('진행중인 독서활동이 있어요')
						navigate(`/reading/${book.id}`)
					}

					getMemoListOfBook(book.id).then(memos => setMemoList(memos))
					setBook(book)
				}
			})
			.finally(() => {
				setInitialFetch(false)
				setIsLoading(false)
			})
	}, [dispatch, id, navigate])

	if (initialFetch) return <></>
	if (isLoading) return <Loading />
	if (isError) return <Error />
	if (book == null) return <></>

	return (
		<Container>
			<EndReadingSessionModal
				isShowingModal={isEndReadingSessionModalOpen}
				setIsShowingModal={setIsEndReadingSessionModalOpen}
				book={book}
			/>
			<MemoDetailModal
				isModalOpen={isMemoDetailModalOpen}
				setIsModalOpen={setIsMemoDetailModalOpen}
				memo={selectedMemo}
				setMemo={setSelectedMemo}
				memoList={memoList}
				setMemoList={setMemoList}
			/>
				{/* <BookDetailButton onClick={() => { navigate(`/book/detail/${id}`) }}>
					책 상세 페이지로
				</BookDetailButton> */}

				<BookContainer>
					<div className="col-4 text-end">
						<BookCover src={book.cover == null || book.cover === '' ? defaultBookCover : book.cover} alt="" className={`${book.cover == null || book.cover === '' ? '' : 'border'}`} />
					</div>

					<div className="col-8 text-center align-self-center">
						<h2>{book.title}</h2>
						<h4 className="text-muted">{book.author}</h4>
					</div>

					<div className="row justify-content-center mt-5">
						<div className="col-11 col-md-9">
							<PageProgressBar book={book} />
						</div>
					</div>
				</BookContainer>
				<Mb/>

				<Timer />

				<div className="row justify-content-center mt-4">
					<div className="col-6 col-lg-4">
						<Button
						variant="book"
							className="w-100"
							onClick={() => showEndReadingSessionModal()}
						>
							독서 끝내기
						</Button>
					</div>

					<div className="col-6 col-lg-4">
						<Button
							variant={isTimerOn ? 'outline-danger' : 'outline-book'}
							className="w-100"
							onClick={() => dispatch(toggleTimer())}
						>
							{isTimerOn ? '잠시 정지' : '다시 시작'}
						</Button>
					</div>
				</div>
				<Mb/>

				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 mt-3">
						<MemoCard
							book={book}
							memoList={memoList}
							setMemoList={setMemoList}
							setSelectedMemo={setSelectedMemo}
							setIsModalOpen={setIsMemoDetailModalOpen}
						/>
					</div>
				</div>
				<Mb />
		</Container>
	)
}

const Container = styled.div.attrs({
	className: 'row justify-content-center text-center'
})`
	padding-left: 20%;
	padding-right: 20%;
`;

const BookContainer = styled.div.attrs({
	className: 'row justify-content-center text-center mt-5'
})``;

const Mb = styled.div.attrs({
	className: 'mb-5'
})``;

const BookCover = styled.img.attrs({
	className: `img-fluid rounded`
})`
	width: 100px;
`;

const BookDetailButton = styled(Button).attrs({
	className: `w-100 mt-3`,
	variant: 'secondary'
})``;

export default ReadingRoute
