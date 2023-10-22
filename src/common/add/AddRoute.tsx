import React from 'react'
import RouteContainer from '../RouteContainer'
import { Outlet, useLocation } from 'react-router-dom'
import AddButtonGroup from './AddButtonGroup'
import { Container } from 'react-bootstrap'

const AddRoute = () => {
	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const type = pathSegments[2] ?? ''

	React.useEffect(() => {
		console.log(location)
		console.log(type)
	}, [])

    return (
		<RouteContainer>
			<Container>
				<AddButtonGroup type={type} />
				<div className="mb-2" />
			</Container>

			<Outlet />
		</RouteContainer>
	)
}

export default AddRoute