import { useLocation } from 'react-router-dom'

const useAddRouteType = () => {
	const location = useLocation()
	const pathSegments = location.pathname.split('/')
	const type = pathSegments[2] ?? ''

	return type
}

export default useAddRouteType