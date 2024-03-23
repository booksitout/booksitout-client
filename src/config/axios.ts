import axios from "axios";
import ApiUrls from "../ApiUrls";

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