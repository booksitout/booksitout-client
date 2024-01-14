import React from 'react'
import urls from '../settings/urls'
import logo from '../../resources/images/logo/logo.png'
import kakaoButton from '../../resources/images/login-button/small-kakao.png'
import naverButton from '../../resources/images/login-button/small-naver.png'
import googleButton from '../../resources/images/login-button/small-google.png'
import facebookButton from '../../resources/images/login-button/small-facebook.png'
import styled from 'styled-components';
import loginImage from '../info/relax.svg'

const MainLogin = () => {
	const oauthButton = [
		{
			id: 1,
			image: googleButton,
			redirectUrl: urls.api.user.login.oauth.get('GOOGLE')!!.loginPage,
			active: true,
		},
		{
			id: 2,
			image: facebookButton,
			redirectUrl: urls.api.user.login.oauth.get('FACEBOOK')!!.loginPage,
			active: false,
		},
		{
			id: 3,
			image: kakaoButton,
			redirectUrl: urls.api.user.login.oauth.get('KAKAO')!!.loginPage,
			active: true,
		},
		{
			id: 4,
			image: naverButton,
			redirectUrl: urls.api.user.login.oauth.get('NAVER')!!.loginPage,
			active: true,
		},
	]

	return (
		<Container>
			<TitleContainer>
				<LogoImage src={logo} />
				<Title>3초만에 로그인 + 가입하기</Title>
			</TitleContainer>

			<Margin />

			<div>
				<OAuthContainer>
					{oauthButton.map(oauth => {
						return (
							<a
								href={oauth.redirectUrl}
								style={{ pointerEvents: !oauth.active ? 'none' : 'auto' }}
							>
								<img
									style={{ width: '50px' }}
									className={
										'img-fluid ms-2 me-2 ms-md-3 me-md-3 rounded ' +
										(!oauth.active && 'opacity-50')
									}
									src={oauth.image}
									alt=""
								/>
							</a>
						)
					})}
				</OAuthContainer>
			</div>

			<Margin />

			<ImageContainer>
				<Image src={loginImage} />
			</ImageContainer>
		</Container>
	)
}

const TitleContainer = styled.div.attrs({
	className: 'd-flex justify-content-center p-3'
})``;

const Container = styled.div`
	height: 100%;
`;

const OAuthContainer = styled.div.attrs({
	className: 'text-center',
})``

const Title = styled.h1`
	color: #0a3622;
	font-size: 35px;
	font-weight: 700;
	padding-top: 2.5px;
`;

const ImageContainer = styled.div`
	min-height: 150px;
	justify-content: center;
	text-align: center;
`

const LogoImage = styled.img.attrs({
	className: 'img-fluid rounded me-2 me-md-3 mt-0 mt-md-1'
})`
	width: 40px;
	height: 40px;
`;

const Image = styled.img.attrs({
	className: '',
})`
	height: 100%;
	width: 40%;
`

const Margin = styled.div`
	margin-top: 20px;
`;

export default MainLogin
