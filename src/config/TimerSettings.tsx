import { useEffect } from 'react'

const TimerSettings = () => {

	useEffect(() => {
		const interval = setInterval(() => {
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return <></>
}

export default TimerSettings
