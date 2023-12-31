import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet, useLocation } from 'react-router-dom'

import ToastSettings from '../settings/ToastSettings'
import LocationSettings from '../settings/LocationSettings'
import TimerSettings from '../settings/TimerSettings'
import Topnav from './topnav/Topnav'
import AddFloatingButton from './AddFloatingButton'
import TimerFloatingButton from './TimerFloatingButton'
import Footer from './Footer'

const Root = () => {
	const footerIncludeUrl = ['/', '/introduction', '/faq']

	const location = useLocation()
	const [currentUrl, setCurrentUrl] = React.useState('')
	React.useEffect(() => {
		setCurrentUrl(location.pathname)
	}, [location])

    return (
		<>
			<Toaster />
			<ToastSettings />
			<LocationSettings />
			<TimerSettings />

			<Topnav />
			<div style={{ marginBottom: '60px' }} />

			<Outlet />

			<TimerFloatingButton />
			<AddFloatingButton />

			<div className="pb-4" />

			{footerIncludeUrl.includes(currentUrl) && <Footer />}
		</>
	)
}

export default Root