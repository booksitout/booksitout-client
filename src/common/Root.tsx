import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet, useLocation } from 'react-router-dom'

import Footer from './Footer'
import Topnav from './topnav/Topnav'
import ToastSettings from '../config/ToastSettings';
import AddFloatingButton from './button/AddFloatingButton';
import TimerFloatingButton from './button/TimerFloatingButton';
import LocationSettings from '../config/LocationSettings';
import TimerSettings from '../config/TimerSettings';
import RowSpacer from './styles/RowSpacer';

const Root = () => {
	const footerIncludeUrl = ['/', '/introduction', '/faq', '/privacy/2023-7-1']

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
			
			<Outlet />

			<TimerFloatingButton />
			<AddFloatingButton />

			{footerIncludeUrl.includes(currentUrl) && <Footer />}
			<RowSpacer />
		</>
	)
}

export default Root