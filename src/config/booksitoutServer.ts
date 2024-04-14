import axios from "axios";
import ApiUrls from "../ApiUrls";
import useLoginStore from "../routes/login/useLoginStore";

export const booksitoutServer = axios.create({
	baseURL: ApiUrls.BASE,
})

booksitoutServer.interceptors.request.use(
	config => {
		const token = localStorage.getItem('access-token')

		if (token) {
			config.headers['Authorization'] = token
		}

		return config
	},
	error => Promise.reject(error),
)

booksitoutServer.interceptors.response.use(
	response => response,
	error => {
		const originalRequest = error.config;

		if (error.response && error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const refreshToken = useLoginStore((state) => state.refreshToken)
			if (refreshToken) {
				try {
					return booksitoutServer
						.get(ApiUrls.User.Login.Refresh.GET(refreshToken))
						.then((res) => {
							const newAccessToken = res.data.accessToken
							useLoginStore.getState().setAccessToken(newAccessToken)
							originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
						})
						.then(() => booksitoutServer(originalRequest))
                } catch (refreshError) {
                    useLoginStore.getState().logout()
                    return Promise.reject(refreshError)
                }
			} else {
				useLoginStore.getState().logout()
			}
		}

		return Promise.reject(error)
	}
)