import styled from 'styled-components';
import Barcode from 'react-barcode'
import { Card } from 'react-bootstrap'
import Error from '../../../common/Error'
import utils from '../../../common/utils'
import CardBodyContentContainer from '../../../common/styles/CardBodyContentContainer'

const LibraryMembershipCard = ({ membership, width = 2 }) => {
	return (
		<Container>
			<CardBodyContentContainer>
				{membership == null ? (
                    <Error />
				) : (
					<a href={`/library/membership/${membership.id}`}>
						<Row>
							<div className='col-4'>
								<img src={membership.logo} alt='' style={{ height: '40px' }} />
							</div>

							<div className='col-8 text-end'>
								<h5 className='clamp-1-line'>{membership.name}</h5>
							</div>
						</Row>

						<div className='w-100 text-center'>
							<Barcode value={membership.number} height={80} width={width} displayValue={false} />

							<h6>{utils.insertSpace(membership.number)}</h6>
						</div>
					</a>
				)}
			</CardBodyContentContainer>
		</Container>
	)
}

const Container = styled(Card)`
	min-height: 200px;
`;

const Row = styled.div.attrs({
	className: 'row'
})`
`;

export default LibraryMembershipCard