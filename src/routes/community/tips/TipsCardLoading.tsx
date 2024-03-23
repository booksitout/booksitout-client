import styled from 'styled-components';
import { BiTime as TimeIcon } from 'react-icons/bi'
import { Card, Placeholder } from 'react-bootstrap'

const TipsCardLoading = () => {
	return (
		<div className='mb-3 col-12 col-md-6 col-lg-4'>
			<List>
				<ImageContainer>
				</ImageContainer>

				<div className='text-book mt-3'>
					<TimeIcon className='mb-1' />
					<Placeholder xs={3} />
				</div>

				<Title>
					<Placeholder as={Card.Text} animation='glow' className='mb-0'>
						<Placeholder xs={7} />
					</Placeholder>
				</Title>
			</List>
		</div>
	)
}


const List = styled.li.attrs({
	className: 'border p-3 rounded'
})`
	display: flex;
	flex-direction: column;
	padding-right: 0px;
`;

const Title = styled.h5.attrs({
	className: 'clamp-1-line'
})``;

const ImageContainer = styled.div`
	width: 100%; 
	height: 0; 
	padding-top: 56.25%; 
	position: relative; 
`;


export default TipsCardLoading