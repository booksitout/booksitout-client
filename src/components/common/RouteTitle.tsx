import React from 'react'
import styled from 'styled-components';

const RouteTitle = ({ icon, title, subTitle = '' }) => {
	return (
		<Container>
			<Icon>{icon}</Icon>
			<Title>{title}</Title>
			<Subtitle>{subTitle}</Subtitle>
		</Container>
	)
}

const Container = styled.div.attrs({
	className: 'd-flex flex-wrap',
})`
	margin-top: 1rem;
	margin-bottom: 1.2rem;
`

const Icon = styled.h1.attrs({
	className: `text-book ms-3 me-3 pt-1`,
})``

const Title = styled.h1.attrs({
	className: 'pt-2',
})``

const Subtitle = styled.h6.attrs({
	className: 'text-secondary ms-4 ms-md-2 mt-2 mt-md-3 mb-0 mb-md-1 clamp-1-line pt-md-3',
})``

export default RouteTitle