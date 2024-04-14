import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { booksitoutServer } from '../../config/booksitoutServer'
import ApiUrls from '../../ApiUrls'
import Loading from '../../common/Loading'
import useUrlQuery from '../../common/hooks/useUrlQuery'
import LoginSuccessResponse from './LoginSuccessResponse'
import useLoginStore from './useLoginStore'

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

	const login = useLoginStore(state => state.login)

	React.useEffect(() => {
		const additional = getAdditional(provider)

		if (code !== null) {
			booksitoutServer
				.get(ApiUrls.User.Login.POST(provider?.toUpperCase() as 'NAVER' | 'GOOGLE' | 'KAKAO' | 'FACEBOOK', code, additional))
				.then((res) => res.data)
				.then((userData: LoginSuccessResponse) => {
					login(userData)
					toast.dismiss()
					toast(`어서오세요, ${userData.name}님!`, { icon: '✋' })
					navigate('/')
				})
				.catch((e) => {
					toast.error(e.message)
					navigate('/')
				})
		}
	}, [code, provider])

    return <Loading size={100} message={`로그인 하고 있어요`} />
}

export default OAuthRedirect