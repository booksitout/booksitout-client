import utils from "../../common/utils"
import { BooksitoutServer } from "../../config/BooksitoutServer"

const location = {
	getLatitudeAndLongitude: async () => {
		if (localStorage.getItem('location') !== null) {
			if (utils.isHoursPassed('location-time', 24)) {
				localStorage.removeItem('location')
				localStorage.removeItem('location-name')
				localStorage.removeItem('location-time')
			} else {
				const location = utils.getNumbersFromLocalStorage('location')

				if (location[0] !== null && !location[1] !== null) {
					return [location[0], location[1]]
				}
			}
		}

		if (navigator.geolocation) {
			return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latitude = position.coords.latitude
						const longitude = position.coords.longitude

						localStorage.setItem('location', latitude + ',' + longitude)
						localStorage.setItem('location-time', new Date().toString())

						return resolve([latitude, longitude])
					},
					() => {
						return resolve([undefined, undefined])
					}
				)
			})
		}
	},

	getLatitudeAndLongitudeNoCache: async () => {
		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latitude = position.coords.latitude
						const longitude = position.coords.longitude

						localStorage.setItem('location', latitude + ',' + longitude)
						localStorage.setItem('location-time', new Date().toString())
						localStorage.removeItem('location-name')

						resolve([latitude, longitude])
					},
					(error) => {
						reject([null, null])
					}
				)
			} else {
				reject([null, null])
			}
		})
	},

	getAddressByLatitudeAndLongitude: async (latitude: number, longitude: number) => {
		if (localStorage.getItem('location-name') !== null) return localStorage.getItem('location-name')

		return BooksitoutServer
			.get(`/v1/location/display-name?lat=${latitude}&long=${longitude}`)
			.then((res) => {
				const address = res.data.shortAddress
				localStorage.setItem('location-name', address)

				return address
			})
			.catch(() => '위치 알 수 없음')
	},
}

export default location