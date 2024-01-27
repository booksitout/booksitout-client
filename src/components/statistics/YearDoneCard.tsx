import React from 'react'
import { Card } from 'react-bootstrap'
import { booksitoutServer } from '../../config/axios'
import { BookType } from '../../types/BookType'
import styled from 'styled-components';

const YearDoneCard = () => {
    const [doneBookList, setDoneBookList] = React.useState<BookType[]>([])

    React.useEffect(() => {
        booksitoutServer
			.get(`v5/book/done/${new Date().getFullYear()}?size=60`)
			.then(res => setDoneBookList(res.data.content))
    }, [])

    return (
		<Container>
			<Card.Body>
				<BookCoverContainer>
					{doneBookList === undefined ? (
						<></>
					) : (
						doneBookList
							.filter(book => book.cover != null && book.cover !== undefined && book.cover !== '')
							.map(book => {
								return (
									<a href={`/book/detail/${book.id}`}>
										<Image src={book.cover} alt="" />
									</a>
								)
							})
					)}
				</BookCoverContainer>
			</Card.Body>
		</Container>
	)
}

const Container = styled(Card)`
	min-height: 200px;
	overflow: hidden;
	background-color: rgb(223, 210, 192);
`;	

const BookCoverContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Image = styled.img.attrs({
	className: 'rounded mb-2',
})`
	width: 60px;
	height: 80px;
`;

export default YearDoneCard