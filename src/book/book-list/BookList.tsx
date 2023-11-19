import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import InfiniteScroll from 'react-infinite-scroll-component'
import parse from 'html-react-parser'
import Error from '../../common/Error'
import NoContent from '../../common/NoContent'
import HorizontalBookView from '../book-view/HorizontalBookView'
import DoneHorizontalBookView from '../book-view/DoneHorizontalBookView'
import InfiniteScrollLoading from '../../common/InfiniteScrollLoading'
import { getBookList, giveUpBook } from '../../functions/book'
import { RootState } from '../../redux/store'
import { BookUserType } from '../../types/BookType'
import BookListLoading from './BookListLoading'
import styled from 'styled-components';
import GiveupHorizontalBookView from '../book-view/GiveupHorizontalBookView'

interface BooksByYear {
    [year: number]: BookUserType[];
}

const BookList = ({ range, rangeDetail }) => {
	const isLogin = useSelector((state: RootState) => state.user.isLogin)

	const rangeApi = () => {
		if (range === 'not-done') {
			if (rangeDetail === 'all' || rangeDetail == null) {
				return 'not-done'
			} else {
				return 'not-started'
			}
		}

		return range
	}

	const noContentMessage = parse(
		range === 'not-done'
			? `읽고 있는 책이 없어요`
			: range === 'done'
			? `다 읽은 책이 없어요`
			: range === 'give-up'
			? `포기한 책이 없어요`
			: `텅 비어 있어요`,
	).toString()
	const fetchSize = 36

	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)
	const [currentPage, setCurrentPage] = React.useState(0)
	const [maxPage, setMaxPage] = React.useState(0)

	const [bookList, setBookList] = React.useState<BookUserType[]>([])
	const [bookListByYear, setBookListByYear] = React.useState<BooksByYear>({})
	
	const groupBooksByYear = (books: BookUserType[], existingGroups: BooksByYear): BooksByYear => {
		const currentYear = new Date().getFullYear()
		const existingBookId = existingGroups ? Object.values(existingGroups).flat().map(book => book.id) : [];

		return books.reduce((acc: BooksByYear, book: BookUserType) => {
			const year = book.doneYear ?? currentYear;

			if (!existingBookId.includes(book.id)) {
				acc[year] = acc[year] || [];
				acc[year].push(book);
			}

			return acc;
		}, existingGroups);
	};

	React.useEffect(() => {
		document.title = `${
			range === 'not-done' ? '읽고 있는 책' : range === 'give-up' ? '포기한 책' : '다 읽은 책'
		} | 책잇아웃`
		if (!isLogin) {
			setLoading(false)
			return
		} else {
			let isSecondPassed = false
			let isLoadingDone = false
			setTimeout(() => {
				isSecondPassed = true
				if (isLoadingDone) {
					setLoading(false)
				}
			}, 100)

			getBookList(rangeApi(), 1, fetchSize)
				.then(pageList => {
					if (pageList == null) return

					setBookList(pageList.content)

					if (rangeApi().toUpperCase() === 'DONE') {
						setBookListByYear(groupBooksByYear(pageList.content, bookListByYear));
					}

					setMaxPage(pageList.totalPages - 1)
				})
				.catch(() => {
					setError(true)
				})
				.finally(() => (isSecondPassed ? setLoading(false) : (isLoadingDone = true)))
		}
	}, [isLogin])

	const getNextPage = () => {
		getBookList(rangeApi(), currentPage + 1, fetchSize)
			.then(pageList => {
				setBookList([...bookList, ...pageList.content])

				if (rangeApi().toUpperCase() === 'DONE') {
					setBookListByYear(groupBooksByYear([...bookList, ...pageList.content], bookListByYear));
				}
			})
			.finally(() => {
				setCurrentPage(currentPage + 1)
			})
	}

	if (loading) {
		return <BookListLoading range={range} />
	}

	if (error || bookList == null) {
		return <Error />
	}

	if (bookList.length === 0) {
		return <NoContent message={noContentMessage ?? ''} textSize={2} iconSize={10} mt={100} move={0} />
	}

	return (
		<InfiniteScroll
			dataLength={bookList.length}
			next={getNextPage}
			hasMore={currentPage < maxPage}
			loader={<BookListLoading range={range} mt={false} />}
			className="overflow-hidden"
		>
			<BookCardList bookList={bookList} range={range} setBookList={setBookList} bookListByYear={bookListByYear} />
		</InfiniteScroll>
	)
}

interface BookCardListProps {
	bookList: BookUserType[]
	bookListByYear: BooksByYear
	range: string
	setBookList: (bookList: BookUserType[]) => void
}

const BookCardList: React.FC<BookCardListProps> = ({ bookList, bookListByYear, range, setBookList }) => {
	const handleGiveupBook = (bookId) => {
		const confirm = window.confirm('책을 포기할까요?')

		if (confirm) {
			giveUpBook(bookId).then((success) => {
				if (success) {
					toast.success('책을 포기했어요. 마음이 바뀌시면 언제든지 다시 시작하실 수 있어요!')
					setBookList(bookList.filter((b) => b.id !== bookId))
				} else {
					toast.error('오류가 났어요 다시 시도해 주세요')
				}
			})
		}
	}

	if (range === 'done') {
		const sortedYears = Object.keys(bookListByYear)
				.map(Number)
				.sort((a, b) => b - a)

		return (
			<BookListContainer>
				{sortedYears.map(year => {
					const books = bookListByYear[year];

					return (
						<>
							<h3 className={`text-start pb-3 ms-2 ${sortedYears[0] !== year && 'pt-5'}`}>{year}년</h3>

							{books.map(book => (
								<BookContainer key={book.id}>
									<DoneHorizontalBookView book={book} />
								</BookContainer>
							))}
						</>
					);
				})}
			</BookListContainer>
		)
	}

	if (range === 'give-up') {
		return (
			<BookListContainer>
				{bookList.map((book) => {
					return (
						<BookContainer>
							<Card className="h-100">
								<Card.Body>
									<GiveupHorizontalBookView
										book={book}
										link={`/book/detail/${book.id}`}
										bookList={bookList}
										setBookList={setBookList}
									/>
								</Card.Body>
							</Card>
						</BookContainer>
					)
				})}
			</BookListContainer>
		)
	}

	if (range === 'not-done') {
		return (
			<BookListContainer>
				{bookList.map(book => {
					return (
						<BookContainer>
							<Card className="h-100">
								<Card.Body>
									<HorizontalBookView
										book={book}
										link={`/book/detail/${book.id}`}
										firstButton={
											<a href={`/reading/${book.id}`} className="btn btn-book w-100">
												이어서 읽기
											</a>
										}
										secondButton={
											<Button
												variant="book-danger"
												className="w-100"
												onClick={e => {
													e.preventDefault()
													handleGiveupBook(book.id)
												}}
											>
												포기하기
											</Button>
										}
										bookList={bookList}
										setBookList={setBookList}
									/>
								</Card.Body>
							</Card>
						</BookContainer>
					)
				})}
			</BookListContainer>
		)
	}

	return <h1 className='text-center'>잘못된 URL이에요</h1>
}

const BookListContainer = styled.div.attrs({
	className: 'row row-eq-height mb-4',
})``

const BookContainer = styled.div.attrs({
	className: 'col-6 col-md-4 col-lg-3 col-xl-2 mb-4',
})``

export default BookList
