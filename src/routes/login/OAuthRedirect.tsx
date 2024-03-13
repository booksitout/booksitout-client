import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { booksitoutServer } from '../../config/axios'
import ApiUrls from '../../ApiUrls'
import Loading from '../../common/Loading'
import useUrlQuery from '../../common/hooks/useUrlQuery'

const OAuthRedirect = () => {
	const { provider } = useParams()

	const navigate = useNavigate()
	const code = useUrlQuery('code')
	const state = useUrlQuery('state')
	const scope = useUrlQuery('scope ')

    const getAdditional = (provider: string | undefined) => {
        switch (provider?.toUpperCase()) {
            case 'NAVER':
                return state
            case 'GOOGLE':
                return scope
            default:
                return ''
        }
    }

	React.useEffect(() => {
		const additional = getAdditional(provider)

		booksitoutServer
			.get(ApiUrls.User.Login.POST('KAKAO', code, additional))
			.then((res) => {
				if (res.status !== 200) throw new Error()
				return res.data
			})
			.catch((e) => {
				toast.error(e)
				navigate('/')
			})
			.then((userData) => {
				localStorage.setItem('login-token', userData.token)
				localStorage.setItem('user-name', userData.name)
				localStorage.setItem('register-year', new Date().getFullYear().toString())
				localStorage.setItem('login-date', new Date().toString())
				localStorage.setItem('profile-image', userData.profileImage)

				toast.dismiss()
				toast(userData.message, { icon: '✋' })
				navigate('/')
            })
	}, [navigate, provider])

    return <Loading />
}

export default OAuthRedirect