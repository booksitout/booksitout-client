import kakaoButton from '../images/login-button/small-kakao.png'
import naverButton from '../images/login-button/small-naver.png'
import googleButton from '../images/login-button/small-google.png'
import facebookButton from '../images/login-button/small-facebook.png'

const kakaoInfo = {
	clientId: 'e0b8e02a9826e15029e2182d1d03bf2b',
	responseType: 'code',
	redirectUrl: `https%3A%2F%2Fbooksitout.com%2Flogin%2Foauth%2Fkakao%2F`,
}

const naverInfo = {
	clientId: 'WWI0nkWyzfAIMmjR0Y8N',
	responseType: 'code',
	redirectUrl: `https%3A%2F%2Fbooksitout.com%2Flogin%2Foauth%2Fnaver%2F`,
	state: 'bookitout',
}

const googleInfo = {
	clientId: '1006818294840-ukep9b2djha66u8on652mjkmmi93q94h.apps.googleusercontent.com',
	responseType: 'code',
	redirectUrl: `https%3A%2F%2Fbooksitout.com%2Flogin%2Foauth%2Fgoogle`,
	scope: `https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`,
}

const facebookInfo = {
	clientId: ``,
	redirectUrl: `https%3A%2F%2Fbooksitout.com%2Flogin%2Foauth%2Ffacebook`,
	state: ``,
}

const OAuthConfig = [
	{
		id: 1,
		image: googleButton,
		redirectUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleInfo.clientId}&redirect_uri=${googleInfo.redirectUrl}&response_type=${googleInfo.responseType}&scope=${googleInfo.scope}`,
		active: true,
	},
	{
		id: 2,
		image: facebookButton,
		redirectUrl: `https://www.facebook.com/v15.0/dialog/oauth?client_id=${facebookInfo.clientId}&redirect_uri=${facebookInfo.redirectUrl}&state=${facebookInfo.state}`,
		active: false,
	},
	{
		id: 3,
		image: kakaoButton,
		redirectUrl: `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoInfo.clientId}&redirect_uri=${kakaoInfo.redirectUrl}&response_type=${kakaoInfo.responseType}`,
		active: true,
	},
	{
		id: 4,
		image: naverButton,
		redirectUrl: `https://nid.naver.com/oauth2.0/authorize?client_id=${naverInfo.clientId}&redirect_uri=${naverInfo.redirectUrl}&response_type=${naverInfo.responseType}&state=bookitout&version=js-2.0.1`,
		active: true,
	},
]

export default OAuthConfig