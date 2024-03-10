import kakaoButton from '../images/login-button/small-kakao.png'
import naverButton from '../images/login-button/small-naver.png'
import googleButton from '../images/login-button/small-google.png'
import facebookButton from '../images/login-button/small-facebook.png'

const OAuthConfig = [
	{
		id: 1,
		image: googleButton,
		redirectUrl: '',
		active: true,
	},
	{
		id: 2,
		image: facebookButton,
		redirectUrl: '',
		active: false,
	},
	{
		id: 3,
		image: kakaoButton,
		redirectUrl: '',
		active: true,
	},
	{
		id: 4,
		image: naverButton,
		redirectUrl: '',
		active: true,
	},
]

export default OAuthConfig