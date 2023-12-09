import React from 'react'
import boardingImage from '../info/people-waving.svg'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';
import { Button } from 'react-bootstrap';

const MainIntroductionSection = () => {
	const head = ['독서생활,', '이제는 더 간편하게.']

	return (
		<div className="container">
			<Container backgroundColor={'#d1e7de'}>
				<Content>
					<Head>
						{head.map(h => {
							return <HeadText>{h}</HeadText>
						})}
					</Head>

					<ButtonContainer href="/introduction">
						<MoreButton variant="book">자세히 알아보기</MoreButton>
					</ButtonContainer>
				</Content>

				<ImageContainer>
					<Image src={boardingImage} />
				</ImageContainer>
			</Container>
		</div>
	)
}

const Container = styled.section.attrs({
	className: 'rounded row m-0',
})`
	min-height: 400px;
	padding: 30px;

	display: flex;
	align-items: center;

	background-color: ${props => props.backgroundColor};
	color: #0a3622;
	overflow: hidden;

	@media screen and (min-width: ${breakpoints.xl}) {
		padding-left: 150px;
		padding-right: 150px;
	}

	@media screen and (min-width: ${breakpoints.xxl}) {
		padding-left: 10%;
		padding-right: 10%;
	}
	
	@media screen and (min-width: ${breakpoints.xxxl}) {
		padding-left: 20%;
		padding-right: 20%;
	}
`

const Content = styled.div.attrs({
	className: 'pb-4 pb-md-0 col-12 col-md-6'
})`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	overflow-y: hidden;
`

const Head = styled.h1`
	font-size: 35px;
	font-weight: 700;

	@media screen and (min-width: ${breakpoints.xl}) {
		font-size: 50px;
	}
`

const HeadText = styled.div.attrs({
	className: `force-1-line`,
})``

const SubHead = styled.h6`
	font-size: 18px;
	font-weight: 400;

	overflow: hidden;

	@media screen and (min-width: ${breakpoints.xl}) {
		font-size: 22px;
	}
`

const SubHeadText = styled.div.attrs({
	className: ``,
})``

const ImageContainer = styled.div.attrs({
	className: 'col-12 col-md-6',
})`
	justify-content: center;
	text-align: center;
`

const Image = styled.img``

const ButtonContainer = styled.a``

const MoreButton = styled(Button).attrs({
	className: 'mt-2',
})`
	width: 100%;

	@media screen and (min-width: ${breakpoints.md}) {
		width: 50%;
	}
`

export default MainIntroductionSection