import styled from 'styled-components';
import { Card, Placeholder } from 'react-bootstrap'
import CardBodyContentContainer from '../../../common/styles/CardBodyContentContainer'

const LibraryMembershipCardLoading = ({ padding = 20 }) => {
	return (
		<Container>
			<CardBodyContentContainer>
				<Row>
					<div className="col-4">
						<Placeholder as={Card.Text} animation="glow">
							<Placeholder xs={4} />
						</Placeholder>
					</div>

					<div className="col-8 text-end">
						<Placeholder as={Card.Text} animation="glow">
							<Placeholder xs={5} />
						</Placeholder>
					</div>
				</Row>

				<div className="w-100 text-center">
					<Placeholder as={Card.Text} animation="glow">
						<Placeholder xs={5} style={{ height: 103 }} className="mt-3" />
						<Placeholder xs={8} />
					</Placeholder>
				</div>
			</CardBodyContentContainer>
		</Container>
	)
}

const Container = styled(Card)`
	min-height: 200px;
	padding-left: ${(props) => props.padding}px;
	padding-right: ${(props) => props.padding}px;
`;

const Row = styled.div.attrs({
	className: 'row'
})`
`;

export default LibraryMembershipCardLoading