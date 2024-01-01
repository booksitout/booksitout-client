import toast from 'react-hot-toast'
import urls from '../settings/urls'
import messages from '../settings/messages'
import utils from '../../functions/utils'
import { booksitoutServer } from '../../config/axios'

const user = {
	join: (joinRequest) => {
		return booksitoutServer
			.post(urls.api.user.join, joinRequest)
			.then((res) => res.status)
	},

	joinVerification: (email) => {
		return booksitoutServer
		.post(urls.api.user.emailV3(), { email: email }, {})
		.then((res) => res)
		.catch((err) => err.response)
	},

	login: (loginRequest) => {
		return booksitoutServer
			.post(urls.api.user.login.basic, loginRequest, {})
			.then((res) => res)
			.catch((err) => {
				localStorage.setItem('login-token', '')
				localStorage.setItem('user-name', '')
				
				return err.response 
			})
	},

	change: {
		password: (verificationCode, oldPassword, newPassword) => {
			const body = { code: verificationCode, oldPassword: oldPassword, newPassword: newPassword }
			return booksitoutServer
				.post(urls.api.user.change.password.change, body)
				.then((res) => res.status.toString())
		},
		name: (name) => {
			return booksitoutServer
				.post(urls.api.user.change.name, { name: name })
				.then((res) => res.status.toString().startsWith('2'))
				.catch(() => false)
		},
		verificationCode: {
			password: () => {
				return booksitoutServer
					.post(urls.api.user.change.password.verify, null)
					.then((res) => res.status.toString().startsWith('2'))
			},
			email: (email) => {
				toast.loading('잠시만 기다려 주세요')
				return booksitoutServer
					.post(urls.api.user.email(email), null)
					.then((res) => {
						if (res.status === 409) {
							toast.error(messages.user.join.verfiyEmail.fail.alreadyRegistered)
							return false
						} else if (res.status === 200) {
							toast.success(messages.user.join.verfiyEmail.success.sent)
							return true
						} else if (res.status === 202) {
							toast.success(messages.user.join.verfiyEmail.success.alreadySent)
							return true
						} else {
							toast.error(messages.error)
							return false
						}
				})
			},
		},
	},

	localStorage: {
		get: {
			isLoggedIn: () => {
				const token = utils.getToken()
				return !(token == null || token === '' || typeof token == 'undefined')
			},
			logoutPossible: () => {
				return localStorage.getItem('reading-session-time') == null
			},
			profileImage: () => {
				return localStorage.getItem('profile-image')
			},
		},
		update: {
			name: (name) => {
				localStorage.setItem('user-name', name)
			},
		},
	},
}

export default user
