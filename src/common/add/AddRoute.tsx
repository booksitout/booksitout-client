import React from 'react'
import RouteContainer from '../RouteContainer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../topnav/ScrollToTop'

const AddRoute = () => {
    return (
		<RouteContainer>
			<ScrollToTop/>
			<Outlet />
		</RouteContainer>
	)
}

export default AddRoute