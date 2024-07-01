import axios, {AxiosError} from 'axios'
import ApiUrls from '../ApiUrls'
import useLoginStore from '../routes/login/useLoginStore'
import toast from "react-hot-toast";

export const BooksitoutServer = axios.create({
    baseURL: ApiUrls.BASE,
})

BooksitoutServer.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access-token')

        if (token) {
            config.headers['Authorization'] = token
        }

        return config
    },
    error => Promise.reject(error),
)

let isRefreshing: boolean = false
let refreshSubscribers: (() => void)[] = []

BooksitoutServer.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                isRefreshing = true
                originalRequest._retry = true // to prevent infinite loop in case of constant 401 responses
                const refreshToken = localStorage.getItem('refresh-token')

                if (refreshToken) {
                    try {
                        const res = await BooksitoutServer.get(ApiUrls.User.Login.Refresh.GET(refreshToken))
                        const newAccessToken = res.data.accessToken
                        useLoginStore.getState().setAccessToken(newAccessToken)
                        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                        isRefreshing = false
                        refreshSubscribers.forEach(callback => callback())
                        refreshSubscribers = []
                        return BooksitoutServer(originalRequest)
                    } catch (refreshError) {
                        const axiosError = refreshError as AxiosError;
                        const is다른기기에서로그인 = axiosError.response?.status === 409
                        if (is다른기기에서로그인) {
                            toast.error('다른 기기에서 로그인 해 로그아웃했어요. 다시 로그인 해주세요.')
                        }

                        isRefreshing = false
                        refreshSubscribers = []
                        useLoginStore.getState().logout(!is다른기기에서로그인)
                        return Promise.reject(refreshError)
                    }
                } else {
                    useLoginStore.getState().logout(true)
                }
            } else {
                return new Promise(resolve => {
                    refreshSubscribers.push(() => {
                        const newAccessToken = useLoginStore.getState().accessToken
                        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                        resolve(BooksitoutServer(originalRequest))
                    })
                })
            }
        }

        return Promise.reject(error)
    },
)
