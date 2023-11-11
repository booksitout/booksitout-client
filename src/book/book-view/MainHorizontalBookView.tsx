import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { Button } from 'react-bootstrap'
import defaultBookCover from '../../images/placeholder/default-book-cover.png'
import PageProgressBar from '../../common/PageProgressBar'
import { giveUpBook } from '../../functions/book'
import styled from 'styled-components';
import breakpoints from '../../common/breakpoints';

const MainHorizontalBookView = ({ book, link = '' }) => {
	const navigate = useNavigate()

	const handleGiveupBook = (bookId) => {
		const confirm = window.confirm('책을 포기할까요?')

		if (confirm) {
			giveUpBook(bookId).then((success) => {
				if (success) {
					toast.success('책을 포기했어요. 마음이 바뀌시면 언제든지 다시 시작하실 수 있어요!')
					navigate(`book/detail/${bookId}`)
				} else {
					toast.error('오류가 났어요 다시 시도해 주세요')
				}
			})
		}
	}

	return (
		<Container>
			<a href={link} className="text-black">
				<MainContainer>
					<ImageContainer>
						<BookCover src={book.cover === '' ? defaultBookCover : book.cover} alt="" />
					</ImageContainer>

					<div className="col-8 text-center">
						<h4 className="clamp-1-line">{book.title}</h4>
						<h6 className="text-muted clamp-1-line">
							{book.author == null || book.author === '' ? '-' : book.author}
						</h6>
						<PageProgressBar book={book} />
					</div>
				</MainContainer>
			</a>

			<ButtonContainer>
				<div className="col-6 mt-md-2">
					<Button variant="book-danger" className="w-100" onClick={() => handleGiveupBook(book.bookId)}>
						포기하기
					</Button>
				</div>

				<div className="col-6 mt-md-2">
					<a href={`/reading/${book.id}`} className="w-100">
						<Button variant="book" className="w-100 clamp-1-line">
							이어서 읽기
						</Button>
					</a>
				</div>
			</ButtonContainer>
		</Container>
	)
}

const Container = styled.div`
	height: 100%;
`

const MainContainer = styled.div.attrs({
	className: 'row row-eq-height',
})`
	justify-content: center;
	align-items: center;

	padding-top: 60px;
	padding-bottom: 75px;
	
	@media screen and (min-width: ${breakpoints.sm}) {
		padding-top: 75px;
		padding-bottom: 125px;
	}

	@media screen and (min-width: ${breakpoints.smmd}) {
		padding-top: 50px;
		padding-bottom: 50px;
	}

	@media screen and (min-width: ${breakpoints.md}) {
		padding-top: 50px;
		padding-bottom: 50px;
	}

	@media screen and (min-width: ${breakpoints.mdlg}) {
		padding-top: 30px;
		padding-bottom: 50px;
	}

	@media screen and (min-width: ${breakpoints.lg}) {
		padding-top: 25px;
		padding-bottom: 75px;
	}

	@media screen and (min-width: ${breakpoints.xl}) {
		padding-top: 20px;
		padding-bottom: 0px;
	}
`

const ImageContainer = styled.div.attrs({
	className: 'col-4 text-center',
})`
	max-height: 150px;
	display: flex;
	align-items: center;

	padding-left: 5px;
	padding-right: 5px;

	@media screen and (min-width: ${breakpoints.md}) {
		max-height: 200px;
	}
	
	@media screen and (min-width: ${breakpoints.xl}) {
		max-height: 250px;
	}
`

const ButtonContainer = styled.div.attrs({
	className: 'row w-100',
})`
	position: absolute;
	bottom: 20px;
`

const BookCover = styled.img.attrs({
	className: 'img-fluid rounded border',
})`
		width: 80%;
		margin-left: 10%;
`

export default MainHorizontalBookView
