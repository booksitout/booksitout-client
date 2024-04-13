import { create } from 'zustand'
import LoginSuccessResponse from './LoginSuccessResponse'
import toast from 'react-hot-toast'

interface LoginState {
	accessToken: string | null
	refreshToken: string | null
	name: string | null
	profileImage: string | null
	ttl: string | null
	login: (tokens: { accessToken: string | null; refreshToken: string | null }) => void
	logout(): void
	isLoggedIn: () => boolean
}

const useLoginStore = create<LoginState>(set => ({
	accessToken: localStorage.getItem('access-token'),
	refreshToken: localStorage.getItem('refresh-token'),
	name: localStorage.getItem('name'),
	profileImage: localStorage.getItem('profile-image'),
	ttl: localStorage.getItem('ttl'),

	login: (response: LoginSuccessResponse) => {
		localStorage.setItem('access-token', response.accessToken)
		localStorage.setItem('refresh-token', response.refreshToken)
		localStorage.setItem('name', response.name)
		localStorage.setItem('profile-image', response.profileImage)
		localStorage.setItem('ttl', response.ttl.toString())

		set({
			accessToken: response.accessToken,
			refreshToken: response.refreshToken,
			name: response.name,
			profileImage: response.profileImage,
			ttl: response.ttl.toString()
		})
	},

	isLoggedIn: () => {
		const state = useLoginStore.getState()
		return state.accessToken !== null && state.accessToken !== ''
	},

	logout: () => {
		toast.success('로그아웃 했어요')
		localStorage.removeItem('access-token')
		localStorage.removeItem('refresh-token')
		set({ accessToken: null, refreshToken: null })
	}
}))

export default useLoginStore