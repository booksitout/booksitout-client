import React from 'react'
import LibraryResponse from './LibraryNearResponse'
import { Card } from 'react-bootstrap'

interface Props {
    library: LibraryResponse
}

const LibraryNearCard: React.FC<Props> = ({ library }) => {
	return (
		<Card style={{ minHeight: '80px' }} className='mb-2'>
			<a href={`/library/${library.id}`}>
				<Card.Body>
					<div className='row'>
						<div className={library.location.distance !== 0 ? 'col-7' : 'col-12'}>
							<h5 className='clamp-1-line'>{library.name}</h5>
						</div>

						{library.location.distance !== 0 && (
							<div className='col-5 text-end'>
								<div className='text-secondary clamp-1-line'>{library.location.distance?.toFixed(1) ?? '-'} km</div>
							</div>
						)}
					</div>

					<h6 className='text-secondary clamp-1-line'>{library.location.address}</h6>
				</Card.Body>
			</a>
		</Card>
	)
}

export default LibraryNearCard