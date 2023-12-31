import React from 'react'
import { Card, ListGroup, Placeholder } from 'react-bootstrap'

const PopularBookListLoading = ({length = 10}) => {
	return (
		<ListGroup className="h-100">
			{Array.from({ length: length }).map((_, i) => {
				return (
					<ListGroup.Item>
						<div className="row">
							<div className="col-1 col-md-2 col-lg-1 p-0 ps-2">
								<Placeholder as={Card.Text} animation="glow" className="mb-0">
									<b className="me-4 force-1-line text-book">{i + 1}</b>
								</Placeholder>
							</div>

							<div className="col-11 col-md-10 col-lg-10 m-0 p-0 ps-3 ps-md-0">
								<Placeholder as={Card.Text} animation="glow" className="mb-0">
									<p className="m-0 clamp-1-line">
										<Placeholder xs={10} />
									</p>
								</Placeholder>

								<p className="text-secondary m-0 force-1-line">
									<Placeholder as={Card.Text} animation="glow" className="mb-0">
										<Placeholder xs={4} />
									</Placeholder>
								</p>
							</div>
						</div>
					</ListGroup.Item>
				)
			})}
		</ListGroup>
	)
}

export default PopularBookListLoading