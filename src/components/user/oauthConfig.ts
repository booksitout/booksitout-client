import kakaoButton from '../../resources/images/login-button/small-kakao.png'
import naverButton from '../../resources/images/login-button/small-naver.png'
import googleButton from '../../resources/images/login-button/small-google.png'
import facebookButton from '../../resources/images/login-button/small-facebook.png'
import urls from '../settings/urls'

const oAuthList = [
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


export { oAuthList }