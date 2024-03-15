import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import location from './location'

const fetchLocation = async () => {
	const locationResult = await location.getLatitudeAndLongitude()

	if (!locationResult || locationResult[0] === null || locationResult[1] === null) {
		throw new Error('Location fetch failed')
	}

	const address = await location.getAddressByLatitudeAndLongitude(locationResult[0], locationResult[1])
	return { latitude: locationResult[0], longitude: locationResult[1], address }
}

const useLocation = () => {
	const [lat, setLatitude] = useState<number | null>(null)
	const [long, setLongitude] = useState<number | null>(null)
	const [locationName, setLocationName] = useState<string | null>(null)
	const [locationError, setLocationError] = useState<boolean>(false)

	useEffect(() => {
		const getLocation = async () => {
			try {
				const { latitude, longitude, address } = await fetchLocation()
				setLatitude(latitude)
				setLongitude(longitude)
				setLocationName(address)
				setLocationError(false)
			} catch (error) {
				setLocationError(true)
				toast.error('위치를 가져올 수 없었어요. 잠시 후 다시 시도해 주세요')
			}
		}

		getLocation()
	}, [])

	const refreshLocation = async () => {
		setLocationName(null)
		toast.loading('위치를 가져오고 있어요')
		try {
			const { latitude, longitude, address } = await fetchLocation()
			setLatitude(latitude)
			setLongitude(longitude)
			setLocationName(address)
			toast.success('위치를 업데이트 했어요')
		} catch (error) {
			toast.error('위치를 가져올 수 없었어요. 잠시 후 다시 시도해 주세요')
		}
	}

	return { lat, long, locationName, locationError, refreshLocation }
}

export default useLocation
