import React from 'react'
import { Button, Card, Placeholder } from 'react-bootstrap';
import bookCoverLoading from '../resources/images/common/loading-default-book-cover.png'
import CardTitle from '../common/CardTitle';
import {BsBookHalf as BookIcon} from 'react-icons/bs'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';

const MainLastReadBookCardLoading = () => {
    return (
		<CardContainer>
			<Card.Body>
				<CardTitle icon={<BookIcon />} title={'마지막으로 읽은 책'} mb={0} />

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
					<div className="col-6 mt-md-2">
						<Button variant="book-danger" className="w-100">
							포기하기
						</Button>
					</div>

					<div className="col-6 mt-md-2">
						<Button variant="book" className="w-100 clamp-1-line">
							이어서 읽기
						</Button>
					</div>
				</ButtonContainer>
			</Card.Body>
		</CardContainer>
	)
}

const CardContainer = styled(Card)`
	height: 100%;
	min-height: 0px;
	
	@media screen and (min-width: 768) {
		min-height: 380px;
	}
`

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

	@media screen and (min-width: ${breakpoints.md}) {
		padding-top: 0px;
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
})``

export default MainLastReadBookCardLoading