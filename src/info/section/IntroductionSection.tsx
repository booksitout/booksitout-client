import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../common/breakpoints';
import parser from 'html-react-parser'

const IntroductionSection = ({ head, subHead, image, color, reversed = false }) => {

    if (reversed) {
		return (
			<Container backgroundColor={color}>
				<ImageContainer>
					<Image src={image} />
				</ImageContainer>

				<div className="col-md-1" />

				<ContentReverse>
					<Head>
						{head.map(h => {
							return <HeadText>{h}</HeadText>
						})}
					</Head>

					<SubHead>
						{subHead.map(h => {
							return <SubHeadText>{parser(h)}</SubHeadText>
						})}
					</SubHead>
				</ContentReverse>
			</Container>
		)
	}

	return (
		<Container backgroundColor={color}>
			<Content>
				<Head>
					{head.map(h => {
						return <HeadText>{h}</HeadText>
					})}
				</Head>

				<SubHead>
					{subHead.map(h => {
						return <SubHeadText>{parser(h)}</SubHeadText>
					})}
				</SubHead>
			</Content>

			<ImageContainer>
				<Image src={image} />
			</ImageContainer>
		</Container>
	)
}

const Container = styled.section.attrs({
	className: 'rounded row',
})`
	min-height: 500px;
	padding: 35px;

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

const ContentReverse = styled.div.attrs({
	className: 'pt-4 pt-md-0 col-12 col-md-5'
})`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	overflow-y: hidden;
`

const Head = styled.h1.attrs({
	className: '',
})`
	font-size: 35px;
	font-weight: 700;

	@media screen and (min-width: ${breakpoints.xl}) {
		font-size: 50px;
	}
`

const HeadText = styled.div.attrs({
	className: `force-1-line`,
})``

const SubHead = styled.h6.attrs({
	className: '',
})`
	font-size: 18px;
	font-weight: 400;

	overflow: hidden;

	@media screen and (min-width: ${breakpoints.xl}) {
		font-size: 22px;
	}
`

const SubHeadText = styled.div.attrs({
	className: `clamp-1-line`,
})``

const ImageContainer = styled.div.attrs({
	className: 'col-12 col-md-6',
})`
	justify-content: center;
	text-align: center;
`

const Image = styled.img.attrs({
	className: '',
})`
	max-width: 100%;

	@media screen and (min-width: ${breakpoints.xl}) {
		max-width: 100%;
	}
`

export default IntroductionSection