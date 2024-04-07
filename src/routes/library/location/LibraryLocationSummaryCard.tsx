import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import useLocationRegion from '../useLocationRegion';
import CardBodyContainer from '../../../common/styles/CardBodyContainer';

interface Props {
	regionName: string
	libraryCount: number
}

const LibraryLocationSummaryCard: React.FC<Props> = ({ regionName, libraryCount }) => {
	const region = useLocationRegion(regionName)

	return (
		<Card>
			<CardBodyContainer height={180}>
				<Row>
					{
						region == null ?
							<></>
							:
							<>
								<div className='col-12 col-md-8'>
									<div className='d-flex align-items-center'>
										<Logo src={region.depth2 == null ? region.depth1.logo : region.depth2.logo} />
										<Name>{region.depth1.koreanName} {region.depth2 == null ? '' : region.depth2.koreanName}</Name>
									</div>
								</div>

								<CountContainer>
									<Count>총 {libraryCount}곳</Count>
								</CountContainer>
							</>

					}
				</Row>
			</CardBodyContainer>
		</Card>
	)
}

const Row = styled.div.attrs({
	className: 'row align-items-center'
})`
`;

const Logo = styled.img.attrs({
	className: 'rounded me-3',
})`
	height: 50px;
`;

const Name = styled.h2.attrs({
	className: 'pt-2'
})`
`;

const CountContainer = styled.div.attrs({
	className: 'col-12 col-md-4 text-end'
})`
`;

const Count = styled.h2.attrs({
	className: 'text-secondary'
})`
`;

export default LibraryLocationSummaryCard