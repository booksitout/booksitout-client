import React from 'react'
import { Card } from 'react-bootstrap'
import defaultCover from '../../../resources/images/common/default-book-cover.png'
import { useDispatch } from 'react-redux'
import { openSearchLibraryDetail, setSearchLibraryDetailSelected } from '../../../redux/modalSlice'
import booksitoutIcon from '../../common/icons/booksitoutIcon';
import styled from 'styled-components';

const LibraryCardComponent = ({ book }) => {
	const dispatch = useDispatch()

	const handleOnClick = () => {
		dispatch(openSearchLibraryDetail())
		dispatch(setSearchLibraryDetailSelected(book))
	}

	if (book == null || book === undefined || book.book == null || book.book === undefined) return <></>

	return (
		<Container onClick={handleOnClick}>
			<Card className="w-100 h-100" style={{ overflow: 'hidden' }}>
				<Card.Body>
					<Row>
						<div className="col-3 d-flex align-items-center">
							<Image src={book.book.cover === '' ? defaultCover : book.book.cover} alt="" />
						</div>

						<div className="col-9">
							<Title>{book.book.title.slice(0, 40)}</Title>
							<SubTitle>{book.book.author}</SubTitle>

							<div className="mt-4 force-1-line">
								{book.libraryList.slice(0, 5).map(library => {
									return (
										<h6>
											<booksitoutIcon.library
												className="me-2 text-book pb-14"
												style={{ width: '20px' }}
											/>
											<span className="mt-2">{library.name}</span>
										</h6>
									)
								})}
							</div>
						</div>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	)
}

const Container = styled.div.attrs({
	className: 	`col-12 col-lg-6 mb-3 mb-lg-0 clickable`
})`
	height: 225px;
`;

const Image = styled.img.attrs({
	className: 'img-fluid'
})`
	width: 100%;
`;

const Row = styled.div.attrs({
	className: 'row'
})`
	width: 100%;
	height: 100%;
`;

const Title = styled.h5``

const SubTitle = styled.h6.attrs({
	className: 'text-secondary',
})``

export default LibraryCardComponent
