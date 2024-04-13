import axios from "axios";
import ApiUrls from "../ApiUrls";
import useLoginStore from "../routes/login/useLoginStore";

export const booksitoutServer = axios.create({
	baseURL: ApiUrls.BASE,
})

booksitoutServer.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('access-token')

		if (token) {
			config.headers['Authorization'] = token;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

booksitoutServer.interceptors.response.use(
	response => response,
	error => {
		if (error.response && error.response.status === 401) {
			useLoginStore.getState().logout()
			// TODO : refresh token으로 access token 재요청하기
		}

		return Promise.reject(error)
	}
)