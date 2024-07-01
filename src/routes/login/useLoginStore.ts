import { create } from 'zustand'
import LoginSuccessResponse from './LoginSuccessResponse'
import toast from 'react-hot-toast'
import searchCache from '../search/searchbar/searchCache'

interface LoginState {
	accessToken: string | null
	refreshToken: string | null
	name: string | null
	profileImage: string | null
	ttl: string | null
	login: (tokens: { accessToken: string | null; refreshToken: string | null }) => void
	logout(isShowMessage: boolean): void
	isLoggedIn: () => boolean
	setAccessToken: (accessToken: string) => void
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

		searchCache.syncCacheWithServer('')

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

	logout: (isShowMessage: boolean) => {
		if (isShowMessage) {
			toast.success('로그아웃 했어요')
		}

		localStorage.removeItem('access-token')
		localStorage.removeItem('refresh-token')
		localStorage.removeItem('name')
		localStorage.removeItem('profile-image')
		localStorage.removeItem('ttl')
		set({ accessToken: null, refreshToken: null })
	},

	setAccessToken: (accessToken: string) => {
		localStorage.setItem('access-token', accessToken)
	} 
}))

export default useLoginStore