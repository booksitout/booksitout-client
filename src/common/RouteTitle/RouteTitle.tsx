import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import RouteButtonGroup from './RouteButtonGroup';
import { RouteButtonGroupType } from './RouteButtonGroupType';

interface RouteTitleProps {
	icon: React.ReactNode
	title: string
	subTitle?: string | null
	currentKey?: string | null | undefined
	buttons?: RouteButtonGroupType[]
	rightUi?: React.ReactNode | null
}

const RouteTitle: React.FC<RouteTitleProps> = (
	{
		icon,
		title,
		subTitle = null,
		currentKey = null,
		buttons = [],
		rightUi = null,
	}
) => {
	return (
		<Container>
			<CardContainer>
				<Card.Body>
					{
						rightUi === null ?
						<TitleContainer>
							<Icon>{icon}</Icon>
							<Title>{title}</Title>
							<Subtitle>{subTitle}</Subtitle>
						</TitleContainer>
						:
						<Row>
							<Col12>
								<TitleContainer>
									<Icon>{icon}</Icon>
									<Title>{title}</Title>
									<Subtitle>{subTitle}</Subtitle>
								</TitleContainer>
							</Col12>

							<Col6>
								{rightUi}
							</Col6>
						</Row>
					}

					{
						buttons.length !== 0 &&
						<>
							<div className="mb-3"></div>
							<RouteButtonGroup buttons={buttons} currentKey={currentKey} />
						</>
					}
				</Card.Body>
			</CardContainer>
		</Container>
	)
}

const Container = styled.div.attrs({
	className: 'd-flex flex-wrap',
})`
	margin-top: 1rem;
	margin-bottom: 1.2rem;
`

const CardContainer = styled(Card)`
	width: 100%;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Icon = styled.h1.attrs({
	className: 'text-book me-3 pt-1',
})``

const Title = styled.h1.attrs({
	className: 'pt-2 force-1-line',
})``

const Subtitle = styled.h6.attrs({
	className: 'text-secondary ms-4 ms-md-2 mt-0 mt-md-3 mb-0 mb-md-1 pt-md-3 pt-3 clamp-1-line',
})``

const Row = styled.div.attrs({
	className: 'row mb-3 justify-content-end',
})``

const Col12 = styled.div.attrs({
	className: 'col-12 col-md-10',
})``

const Col6 = styled.div.attrs({
	className: 'col-6 col-md-2 pt-4 pt-md-3',
})``

export default RouteTitle