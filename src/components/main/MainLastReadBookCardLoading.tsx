import React from 'react'
import { Button, Card, Placeholder } from 'react-bootstrap';
import bookCoverLoading from '../../resources/images/common/loading-default-book-cover.png'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';
import booksitoutIcon from '../common/icons/booksitoutIcon';

const MainLastReadBookCardLoading = () => {
	return (
		<>
			<MainContainer>
				<ImageContainer>
					<BookCover src={bookCoverLoading} alt="" />
				</ImageContainer>

				<div className="col-8 text-center">
					<Placeholder as={Card.Text} animation="wave">
						<h4>
							<Placeholder xs="10" />
						</h4>

						<h6 className="text-muted">
							<Placeholder xs="4" />
						</h6>

						<div className="pb-1" />

						<div className="pb-3">
							<Placeholder xs="12" />
						</div>
					</Placeholder>
				</div>
			</MainContainer>

			<ButtonContainer>
				<div>
					<Button variant="book" className="w-100 clamp-1-line">
						<booksitoutIcon.book /> 이어서 읽기
					</Button>
				</div>
			</ButtonContainer>
		</>
	)
}

const MainContainer = styled.div.attrs({
	className: 'row row-eq-height',
})`
	justify-content: center;
	align-items: center;

	padding-top: 25px;
	padding-bottom: 75px;

	@media screen and (min-width: ${breakpoints.sm}) {
		padding-top: 75px;
		padding-bottom: 125px;
	}

	@media screen and (min-width: ${breakpoints.smmd}) {
		padding-top: 100px;
		padding-bottom: 150px;
	}

	@media screen and (min-width: ${breakpoints.md}) {
		height: 50%;
		padding-top: 50px;
		padding-bottom: 50px;
	}

	@media screen and (min-width: ${breakpoints.mdlg}) {
		height: 75%;
		padding-top: 30px;
		padding-bottom: 50px;
	}
	
	@media screen and (min-width: ${breakpoints.lg}) {
		height: 85%;
		padding-top: 25px;
		padding-bottom: 75px;
	}
	
	@media screen and (min-width: ${breakpoints.xl}) {
		height: 65%;
		padding-top: 20px;
		padding-bottom: 0px;
	}
`

const ImageContainer = styled.div.attrs({
	className: 'col-4 text-center',
})`
	height: 150px;
	display: flex;
	align-items: center;

	padding-left: 5px;
	padding-right: 5px;

	@media screen and (min-width: ${breakpoints.md}) {
		height: 200px;
	}
	
	@media screen and (min-width: ${breakpoints.xl}) {
		height: 250px;
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

export default MainLastReadBookCardLoading