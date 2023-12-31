import React from "react"
import { RecentBookType } from "./PostType"
import { Button, Card, Carousel } from "react-bootstrap"
import {AiFillCheckCircle as CheckIcon} from 'react-icons/ai'
import { booksitoutServer } from "../../../config/axios"
import utils from "../../../functions/utils"
import styled from 'styled-components';

const AddIsbnCard = ({isbn, setIsbn, setShow, recentBookList, setRecentBookList}) => {
	const [splitRecentBookList, setSplitRecentBookList] = React.useState<RecentBookType[][]>([[]])
	React.useEffect(() => {
		booksitoutServer
			.get('/v4/book/recent?size=12')
			.then((res) => setRecentBookList(res.data))
			.catch((e) => {})
	}, [])

	React.useEffect(() => {
		setSplitRecentBookList(utils.splitArray(recentBookList, 6))
	}, [recentBookList])

	return (
		<IsbnCard>
			<Card.Body>
				<Carousel controls={recentBookList.length > 1} interval={null} indicators={false} variant="dark">
					{splitRecentBookList.map(bookArray => {
						return (
							<Carousel.Item>
								<Row>
									{bookArray.map(book => {
										return (
											<div className="col-6 col-md-2 text-center">
												<BookCard
													onClick={() => {
														if (book.isbn === isbn) setIsbn('')
														else setIsbn(book.isbn)
													}}
												>
													<Card.Body className="pb-0">
														{book.isbn === isbn && (
															<CheckIcon
																className="img-fluid text-book"
																style={{
																	width: '50px',
																	height: '50px',
																	position: 'absolute',
																	top: '0px',
																	right: '0px',
																	zIndex: 100,
																	overflow: 'visible',
																}}
															/>
														)}

														<div
															style={{
																opacity: book.isbn === isbn ? 0.6 : 1.0,
																pointerEvents: 'none',
															}}
														>
															<BookCover src={book.cover} alt="" />

															<BookInfoContainer>
																<Title>{book.title}</Title>
																<Author>{book.author}</Author>
															</BookInfoContainer>
														</div>
													</Card.Body>
												</BookCard>
											</div>
										)
									})}
								</Row>
							</Carousel.Item>
						)
					})}
				</Carousel>

				<Row>
					<ButtonContainer onClick={() => setShow(true)}>
						<AddButton variant="outline-book">직접 검색해서 추가하기</AddButton>
					</ButtonContainer>
				</Row>
			</Card.Body>
		</IsbnCard>
	)
}

const IsbnCard = styled(Card).attrs({
	className: 'pb-5 pb-md-0',
})`
	min-height: 300px;
`

const Row = styled.div.attrs({
	className: 'row row-eq-height justify-content-center',
})``

const ButtonContainer = styled.div.attrs({
	className: 'col-6 col-md-6'
})`
	position: absolute;
	bottom: 20px;
`;

const AddButton = styled(Button)`
	width: 100%;
`;

const BookInfoContainer = styled.div`
	position: absolute;
	bottom: 10px;
	left: 0px;
	width: 100%;
`;

const Title = styled.h6.attrs({
	className: 'mt-1 clamp-1-line',
})`
	text-align: center;
	overflow: hidden;
`

const Author = styled.h6.attrs({
	className: 'text-secondary clamp-1-line',
})`
	text-align: center;
`

const BookCover = styled.img.attrs({
	className: 'img-fluid rounded border'
})`
	max-height: 100px;
`;

const BookCard = styled(Card).attrs({
	className: 'clickable mb-3'
})`
	height: 200px;
	overflow: hidden;
`

export default AddIsbnCard