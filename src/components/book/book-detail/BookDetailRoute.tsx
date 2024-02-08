import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { Card, Button, ProgressBar, Row, Modal } from 'react-bootstrap'
import Loading from '../../common/Loading'
import NoContent from '../../common/NoContent'
import BookInfoIcon from '../book-info/BookInfoIcon'
import PageProgressBar from '../../common/PageProgressBar'
import AddRatingModal from './AddRatingModal'
import AddSummaryModal from './AddSummaryModal'
import AddReviewModal from './AddReviewModal'
import AddButton from '../../common/AddButton'
import AddReadingSessionModal from './AddReadingSessionModal'
import ReadingSessionDetailModal from './ReadingSessionDetailModal'
import AddMemoModal from './AddMemoModal'
import MemoDetailModal from './memo/MemoDetailModal'
import { deleteBook, getBook, giveUpBook, unGiveUpBook } from '../../../functions/book'
import { getMemoListOfBook } from '../../../functions/memo'
import { getAllReadingSessionOfBook } from '../../../functions/reading'
import { FORM_INFO, LANGUAGE_INFO, SOURCE_INFO } from '../book-info/bookInfoEnum'
import uiSettings from '../../settings/ui'
import Error from '../../common/Error';
import BookRatingDetail from './BookRating'
import { BookUserType } from '../../../types/BookType'
import { ReadingSessionType } from '../../../types/ReadingType'
import BookDetailMemoCard from './memo/BookDetailMemoCard'
import RouteContainer from '../../common/RouteContainer'
import RouteTitle from '../../common/RouteTitle'
import booksitoutIcon from '../../common/icons/booksitoutIcon';
import categoryConfig from '../../../config/categoryConfig'
import BookCover from './BookCover'
import breakpoints from '../../common/breakpoints'
import styled from 'styled-components';
import { BsBookHalf as ReadButton } from "react-icons/bs";
import DetailButton from '../../common/DetailButton'

const BookDetailRoute = () => {
	const { id } = useParams()

	const [loading, setLoading] = React.useState(true)
	const [initialFetch, setInitialFetch] = React.useState(true)
	const [error, setError] = React.useState(false)
	const [book, setBook] = React.useState<BookUserType | null>(null)
	const [memo, setMemo] = React.useState(null)
	const [readingSession, setReadingSession] = React.useState<ReadingSessionType[]>([])

	const [isBookDoneReading, setIsBookDoneReading] = React.useState<boolean>(false)

	React.useEffect(() => {
		setTimeout(() => {
			setInitialFetch(false)
		}, uiSettings.initalFetchTime)

		Promise.all([
			getBook(id).then((book) => {
				document.title = `${book.title} | 책잇아웃`
				setBook(book)
				setIsBookDoneReading((book?.currentPage ?? 0) >= (book?.endPage ?? 0))
			}),
			getMemoListOfBook(id).then((memoList) => setMemo(memoList)),
			getAllReadingSessionOfBook(id).then((readingSessionList) => setReadingSession(readingSessionList)),
		])
		.catch(() => {
			setError(true)
		})
		.finally(() => {
			setLoading(false)
			setInitialFetch(false)
		})
	}, [id])

	const [ratingModalOpen, setRatingModalOpen] = React.useState<boolean>(false)
	const [reviewModalOpen, setReviewModalOpen] = React.useState<boolean>(false)
	const [summaryModalOpen, setSummaryModalOpen] = React.useState<boolean>(false)

	const [addReadingModalOpen, setAddReadingModalOpen] = React.useState<boolean>(false)
	const [addMemoModalOpen, setAddMemoModalOpen] = React.useState<boolean>(false)

	const [readingDetailModalOpen, setReadingDetailModalOpen] = React.useState<boolean>(false)
	const [memoDetailModalOpen, setMemoDetailModalOpen] = React.useState<boolean>(false)

	const [selectedReadingSession, setSelectedReadingSession] = React.useState(null)
	const [selectedMemo, setSelectedMemo] = React.useState(null)

	const [isButtonOpen, setIsButtonOpen] = React.useState<boolean>(false)

	const getTotalReadTIme = (readingSessionList) => {
		return readingSessionList.map((r) => r.readTime).reduce((pre, cur) => pre + cur, 0)
	}

	const getRemainReadTime = (book, readingSessionList) => {
		const averageReadTimePerPage = Number(getTotalReadTIme(readingSessionList)) / book.currentPage
		const bookRemainPage = book.endPage - book.currentPage

		return Math.round(bookRemainPage * averageReadTimePerPage)
	}

	if (initialFetch) return <></>
	if (loading) return <Loading message='잠시만 기다려 주세요' />
	if (error) return <Error message='없는 책이에요' move={-100}/>
	if (book == null) return <NoContent message='책이 없어요 다시 확인해 주세요' />

	return (
		<RouteContainer width={breakpoints.xl}>
			<RouteTitleContainer>
				<DetailButton onClick={() => setIsButtonOpen(true)} />

				<Card.Body>
					<Flex>
						<BookCoverContainer>
							<BookCover book={book} />
						</BookCoverContainer>

						<BookInfoContainer>
							<Title>{book.title}</Title>
							<Author>{book.author == null ? '-' : book.author}</Author>
							<PageProgressBar book={book} />
						</BookInfoContainer>
					</Flex>

					{
						!isBookDoneReading &&
							<BookReadingButtonContainer>
								<BookReadingButton href={`/reading/${book.id}`}>
									<h4><ReadButton /> 이어서 읽기</h4>
								</BookReadingButton>
							</BookReadingButtonContainer>
					}
				</Card.Body>
			</RouteTitleContainer>

			<div className="row text-center">
				<AddRatingModal
					isModalOpen={ratingModalOpen}
					setIsModalOpen={setRatingModalOpen}
					book={book}
					setBook={setBook}
				/>
				<AddReviewModal
					isModalOpen={reviewModalOpen}
					setIsModalOpen={setReviewModalOpen}
					book={book}
					setBook={setBook}
				/>
				<AddSummaryModal
					isModalOpen={summaryModalOpen}
					setIsModalOpen={setSummaryModalOpen}
					book={book}
					setBook={setBook}
				/>
				<AddReadingSessionModal
					isModalOpen={addReadingModalOpen}
					setIsModalOpen={setAddReadingModalOpen}
					book={book}
					setBook={setBook}
					readingSessionList={readingSession}
					setReadingSessionList={setReadingSession}
				/>
				<AddMemoModal
					modalOpen={addMemoModalOpen}
					setModalOpen={setAddMemoModalOpen}
					book={book}
					memoList={memo}
					setMemoList={setMemo}
				/>
				<ReadingSessionDetailModal
					isModalOpen={readingDetailModalOpen}
					setIsModalOpen={setReadingDetailModalOpen}
					readingSession={selectedReadingSession}
					setReadingSession={setSelectedReadingSession}
					readingSessionList={readingSession}
					setReadingSessionList={setReadingSession}
					book={book}
					setBook={setBook}
				/>
				<MemoDetailModal
					isModalOpen={memoDetailModalOpen}
					setIsModalOpen={setMemoDetailModalOpen}
					memo={selectedMemo}
					setMemo={setSelectedMemo}
					memoList={memo}
					setMemoList={setMemo}
				/>
				<BookButtonsModal 
					isOpen={isButtonOpen} 
					setIsOpen={setIsButtonOpen} 
					book={book} 
					setBook={setBook} 
					setIsRatingModalOpen={setRatingModalOpen} 
					setIsReviewModalOpen={setReviewModalOpen} 
					setIsSummaryModalOpen={setSummaryModalOpen}
				/>

				<div className="col-12">
					{/* <BookDescription book={book} /> */}

					{book.summary != null && (
						<Card className="mt-2">
							<Card.Body>
								<h4>✅ 요약</h4>

								{book.summary}
							</Card.Body>
						</Card>
					)}

					{book.review != null && (
						<Card className="mt-2">
							<Card.Body>
								<h4>💬 감상</h4>

								{book.review}
							</Card.Body>
						</Card>
					)}

					<Card>
						{book.currentPage !== 0 && (
							<>
								<div
									className="bg-secondary text-white d-none d-xl-block"
									style={{
										left: '2.5%',
										width: `100px`,
										height: `30px`,
										borderRadius: '5px',
										position: 'absolute',
										top: '15px',
									}}
								>
									총 {getTotalReadTIme(readingSession)}분
								</div>
							</>
						)}

						{book.currentPage !== 0 && book.currentPage !== book.endPage && (
							<>
								<div
									className="bg-secondary text-white d-block d-xl-none"
									style={{
										left: '2.5%',
										width: `100px`,
										height: `30px`,
										borderRadius: '5px',
										position: 'absolute',
										top: '15px',
									}}
								>
									앞으로 {getRemainReadTime(book, readingSession)}분
								</div>

								<div
									className="bg-secondary text-white d-none d-xl-block"
									style={{
										left: '17%',
										width: `100px`,
										height: `30px`,
										borderRadius: '5px',
										position: 'absolute',
										top: '15px',
									}}
								>
									앞으로 {getRemainReadTime(book, readingSession)}분
								</div>
							</>
						)}

						{book.currentPage !== book.endPage && (
							<AddButton
								size={30}
								color="book"
								onClick={() => setAddReadingModalOpen(true)}
							/>
						)}

						<Card.Body style={{ minHeight: '300px' }}>
							<h4>📚 독서활동</h4>

							<div className="row justify-content-center mt-4">
								<div className="col-12">
									{readingSession == null || readingSession.length === 0 ? (
										<div className="mb-4">
											<NoContent message="독서활동이 없어요" move={-15} />
										</div>
									) : (
										<ReadingSessionList
											readingSessionList={readingSession}
											book={book}
											setIsReadingSessionModalOpen={setReadingDetailModalOpen}
											setSelectedReadingSession={setSelectedReadingSession}
										/>
									)}
								</div>
							</div>
						</Card.Body>
					</Card>

					<BookDetailMemoCard
						memo={memo}
						setMemoDetailModalOpen={setMemoDetailModalOpen}
						setAddMemoModalOpen={setAddMemoModalOpen}
						setSelectedMemo={setSelectedMemo}
						bookId={id}
					/>
				</div>
			</div>
		</RouteContainer>
	)
}

const RouteTitleContainer = styled(Card).attrs({
	className: 'mt-4 mb-4'
})`
`;

const Title = styled.h3``;

const Author = styled.h4.attrs({
	className: 'text-muted'
})``;

const BookCoverContainer = styled.div.attrs({
})``;

const BookInfoContainer = styled.div.attrs({
})`
	margin-left: 50px;
`;

const BookReadingButtonContainer = styled.div`
	text-align: center;
	margin-top: 20px;
`;

const BookReadingButton = styled.a.attrs({
	className: 'btn btn-book'
})`
	width: 100%;
	max-width: 300px;
`;

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BookButtonsModal = ({ isOpen, setIsOpen, book, setBook, setIsRatingModalOpen, setIsReviewModalOpen, setIsSummaryModalOpen }) => {
	const navigate = useNavigate()
	const BOOK_EDIT_URL = `/book/edit/${book.id}`

	return (
		<Modal show={isOpen} onHide={() => setIsOpen(false)} centered fullscreen='md-down'>
			<Modal.Header closeButton />
			<Modal.Body>
				<div className="row mt-3">
					<div className="col-12 mt-3">
						<Button variant="outline-book-danger" className="w-100" onClick={() => navigate(BOOK_EDIT_URL)}>
							수정하기
						</Button>
					</div>

					<div className="col-12 mt-3">
						<Button
							variant="outline-book-danger"
							className="w-100"
							onClick={() => {
								const confirm = window.confirm('정말 책을 삭제할까요?')

								if (confirm) {
									deleteBook(book.id).then(success => {
										if (success) {
											toast.success('책을 삭제 했어요')
											navigate('/book/not-done/all')
										} else {
											toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요')
										}
									})
								}
							}}
						>
							삭제하기
						</Button>
					</div>

					{Number(book.currentPage) === Number(book.endPage) ? (
						<>
							{book.rating == null ? (
								<div className="col-12 mt-3">
									<Button variant="book" className="w-100" onClick={() => setIsRatingModalOpen(true)}>
										별점 추가하기
									</Button>
								</div>
							) : (
								<div>
									<BookRatingDetail book={book} setBook={setBook} />
								</div>
							)}

							{book.review == null ? (
								<div className="col-12 mt-3">
									<Button variant="book" className="w-100" onClick={() => setIsReviewModalOpen(true)}>
										감상 추가하기
									</Button>
								</div>
							) : (
								<></>
							)}

							{book.summary == null ? (
								<div className="col-12 mt-3">
									<Button variant="book" className="w-100" onClick={() => setIsSummaryModalOpen(true)}>
										요약 추가하기
									</Button>
								</div>
							) : (
								<></>
							)}
						</>
					) : book.currentPage < book.endPage && !book.isGiveUp ? (
						<>
							<div className="col-12 mt-3">
								<Button
									variant="book-danger"
									className="w-100"
									onClick={() => {
										const confirm = window.confirm('책을 포기할까요?')

										if (confirm) {
											giveUpBook(book.id).then(success => {
												if (success) {
													toast.success('책을 포기했어요. 마음이 언제든지 다시 시작하실 수 있어요!')
													navigate('/book/give-up')
												} else {
													toast.error('오류가 났어요 다시 시도해 주세요')
												}
											})
										}
									}}
								>
									포기하기
								</Button>
							</div>
						</>
					) : (
						<>
							<div className="col-12 mt-3">
								<Button
									variant="book"
									className="w-100"
									onClick={() => {
										const confirm = window.confirm('책을 다시 읽을까요?')

										if (confirm) {
											unGiveUpBook(book.id).then(success => {
												if (success) {
													toast.success('책을 다시 읽을 수 있어요')
													navigate('/book/not-done/all')
												} else {
													toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요')
												}
											})
										}
									}}
								>
									다시 읽기 (포기 취소)
								</Button>
							</div>
						</>
					)}
				</div>
			</Modal.Body>
		</Modal>
	)
}

const BookDescription = ({ book }) => {
	const infoIconStyle = `col-4 col-md-8 col-lg-6 col-xl-8 align-self-center`
	const infoCardStyle = `col-6 col-md-3 col-lg-3 col-xl-2 mb-2`

	const categoryReactIconMap: Map<string, any> = new Map([
		['PHILOSOPHY', <booksitoutIcon.categoryPhilosophy />],
		['RELIGION', <booksitoutIcon.categoryReligion />],
		['SOCIAL_SCIENCE', <booksitoutIcon.categorySocialScience />],
		['NATURAL_SCIENCE', <booksitoutIcon.categoryNaturalScience />],
		['TECHNOLOGY', <booksitoutIcon.categoryTechnology />],
		['ART', <booksitoutIcon.categoryArt />],
		['LANGUAGE', <booksitoutIcon.categoryLanguage />],
		['LITERATURE', <booksitoutIcon.categoryLiterature />],
		['HISTORY', <booksitoutIcon.categoryHistory />],
		['OTHERS', <booksitoutIcon.categoryOthers />],
	])

	const getCategoryReactIcon = (category: string) => {
		return categoryReactIconMap.get(category) ?? booksitoutIcon.categoryOthers
	}

	return (
		<>
			<div className="row justify-content-center">
				<div className={infoCardStyle}>
					{/* <a href={`/book/all?language=${book.language}`} className='text-decoration-none text-black'> */}
					<BookInfoIcon
						infoType={LANGUAGE_INFO}
						infoData={book.language != null ? book.language : 'KOREAN'}
						responsiveImageStyle={infoIconStyle}
					/>
					{/* </a> */}
				</div>

				<div className={infoCardStyle}>
					{/* <a href={`/book/all?category=${book.category}`} className='text-decoration-none text-black'> */}
					<Card style={{ height: '100px' }}>
						<Card.Body>
							<div className="row justify-content-center">
								<div className="col-9 col-md-10 align-self-center p-0">
									<h2
										style={{
											color: categoryConfig(book.category)?.color[0],
											height: '40px',
										}}
									>
										{getCategoryReactIcon(book.category)}
									</h2>
								</div>

								<div className="col-12 col-md-12 mt-2 mt-md-0">
									<h6 className="text-center mb-0 force-1-line">
										{categoryConfig(book.category)?.korean}
									</h6>
								</div>
							</div>
						</Card.Body>
					</Card>

					{/* <BookInfoIcon
						infoType={CATEGORY_INFO}
						infoData={book.category}
						responsiveImageStyle={infoIconStyle}
					/> */}
					{/* </a> */}
				</div>

				<div className={infoCardStyle}>
					{/* <a href={`/book/all?form=${book.form}`} className='text-decoration-none text-black'> */}
					<BookInfoIcon
						infoType={FORM_INFO}
						infoData={book.form != null ? book.form : 'PHYSICAL'}
						responsiveImageStyle={infoIconStyle}
					/>
					{/* </a> */}
				</div>

				<div className={infoCardStyle}>
					{/* <a href={`/book/all?source=${book.source}`} className='text-decoration-none text-black'> */}
					<BookInfoIcon
						infoType={SOURCE_INFO}
						infoData={book.source != null ? book.source : 'NOT_PROVIDED'}
						responsiveImageStyle={infoIconStyle}
					/>
					{/* </a> */}
				</div>
			</div>
		</>
	)
}

const ReadingSessionList = ({ readingSessionList, book, setIsReadingSessionModalOpen, setSelectedReadingSession }) => {
	return (
		<div className='row row-eq-height'>
			{readingSessionList
				.filter((r) => r.endPage != null)
				.map((readingSession) => {
					return (
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<Card
								className="mb-2 clickable"
								onClick={() => {
									setIsReadingSessionModalOpen(true)
									setSelectedReadingSession(readingSession)
								}}
							>
								<Card.Body>
									<div className="row justify-content-center">
										<div className="col-8 col-md-6" style={{ whiteSpace: 'nowrap' }}>
											🗓️{' '}
											{
												`${readingSession.startTime[0]}년 ${readingSession.startTime[1]}월 ${readingSession.startTime[2]}일`
											}
										</div>
										<div className="col-4 col-lg-6">⌛️ {readingSession.readTime}분</div>

										<div className="col-6 mt-3">
											📃 {readingSession.startPage}p - {readingSession.endPage}p
										</div>

										<ProgressBar className="p-0">
											<ProgressBar
												style={{ backgroundColor: 'rgb(234, 236, 239)' }}
												now={(readingSession.startPage / book.endPage) * 100}
											/>
											<ProgressBar
												variant="book"
												now={
													(readingSession.endPage / book.endPage) * 100 -
													(readingSession.startPage / book.endPage) * 100
												}
												label={`${Math.round(
													(readingSession.endPage / book.endPage) * 100 -
														(readingSession.startPage / book.endPage) * 100,
												)}%`}
											/>
										</ProgressBar>
									</div>
								</Card.Body>
							</Card>
						</div>
					)
				})}
		</div>
	)
}

export default BookDetailRoute
