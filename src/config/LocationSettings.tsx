import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import date from '../common/functions/date'

const LocationSettings = () => {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (
			localStorage.getItem('login-date') &&
			date.getDateDifferenceInDays(new Date(localStorage.getItem('login-date') ?? Date.now()), new Date()) >= 7
		) {
			localStorage.clear()
			navigate('/login')
			toast.error('1주일이 지났어요. 다시 로그인 해  주세요')
		}
	}, [location.pathname, navigate])

	return <></>
}

export default LocationSettings
