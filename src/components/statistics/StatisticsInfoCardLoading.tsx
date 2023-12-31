import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

const StatisticsInfoCardLoading = ({ icon, textFront, textBack }) => {
	return (
		<Card style={{ height: '100px' }}>
			<Card.Body>
				<div className="text-center">
					<h3 className="text-book">{icon}</h3>

					<Placeholder as={Card.Text} animation="wave">
						<div className="clamp-1-line">
							{textFront}{' '}
							<b className="text-book">
								<Placeholder xs="1" />
							</b>
							{textBack}
						</div>
					</Placeholder>
				</div>
			</Card.Body>
		</Card>
	)
}

export default StatisticsInfoCardLoading