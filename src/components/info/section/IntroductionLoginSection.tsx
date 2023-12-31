import React from 'react'
import styled from 'styled-components';
import { oAuthList } from '../../user/oauthConfig';
import breakpoints from '../../common/breakpoints';
import relaxImage from '../relax.svg'

const IntroductionLoginSection = () => {
	return (
		<Container>
			<ImageContainer>
				<Image src={relaxImage} />
			</ImageContainer>

			<div className="col-md-1" />

			<Content>
				<Head>
					3초만에 <div className="d-block d-md-none"></div>
					로그인 + 회원가입
				</Head>

				<LoginButtonContainer>
					{oAuthList.map(oauth => {
						return (
							<LoginButton href={oauth.redirectUrl} active={oauth.active}>
								<LoginImage src={oauth.image} alt="" />
							</LoginButton>
						)
					})}
				</LoginButtonContainer>
			</Content>
		</Container>
	)
}

const Container = styled.section.attrs({
	className: 'rounded row',
})`
	min-height: 600px;
	padding: 50px;

	display: flex;
	align-items: center;

	background-color: ${props => props.backgroundColor};
	color: #0a3622;
	overflow-y: hidden;

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

const LoginButtonContainer = styled.div.attrs({
	className: '',
})`
	display: flex;
`

const LoginButton = styled.a.attrs({
	className: 'pe-3',
})`
	pointer-events: ${props => (props.active ? 'auto' : 'none')};
	opacity: ${props => (props.active ? '100%' : '50%')};
`

const LoginImage = styled.img.attrs({
	className: 'img-fluid ms-1 me-1 ms-md-3 me-md-3 rounded',
})`
	width: 50px;
`

const Content = styled.div.attrs({
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
	font-weight: 500;
	padding-bottom: 20px;

	@media screen and (min-width: ${breakpoints.xl}) {
		font-size: 40px;
	}
`

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

export default IntroductionLoginSection