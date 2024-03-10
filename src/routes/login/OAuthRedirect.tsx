import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { booksitoutServer } from '../../config/axios'
import { useUrlQuery } from '../../common/hooks/useUrlQuery'
import ApiUrls from '../../ApiUrls'
import Loading from '../../common/Loading'

const OAuthRedirect = () => {
	const { provider } = useParams()

	const navigate = useNavigate()
	const query = useUrlQuery()

    const getAdditional = (provider: string | undefined) => {
        switch (provider?.toUpperCase()) {
            case 'NAVER':
                return query.get('state')
            case 'GOOGLE':
                return query.get('scope')
            default:
                return 'none'
        }
    }

	React.useEffect(() => {
		const code = query.get('code')
		const additional = getAdditional(provider)

		booksitoutServer
			.get(ApiUrls.User.Login.POST)
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
	}, [navigate, query, provider])

    return <Loading />
}

export default OAuthRedirect