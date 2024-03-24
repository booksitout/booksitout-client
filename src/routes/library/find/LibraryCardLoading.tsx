import styled from 'styled-components';
import { Card, Placeholder } from 'react-bootstrap'
import LibraryTextWithIcon from './LibraryTextWithIcon'
import { TbLocationFilled as LocationIcon } from 'react-icons/tb'
import { BsBookHalf as BookIcon } from 'react-icons/bs'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import breakpoints from '../../../config/breakpoints';

const LibraryCardLoading = () => {
	return (
		<Container>
			<CardBodyBackgroundContainer>
				<Row>
					<LibraryNameContainer className='col-8'>
						<LibraryName>
							<Placeholder as={Card.Text} animation='glow' className='mb-0'>
								<Placeholder xs={9} />
							</Placeholder>
						</LibraryName>
					</LibraryNameContainer>

					<Col4>
						<h5 className='text-end text-secondary'>
							<Placeholder as={Card.Text} animation='glow' className='mb-0'>
								<Placeholder xs={3} />
							</Placeholder>
						</h5>
					</Col4>
				</Row>

				<LibraryInfoContianer>
					<Placeholder as={Card.Text} animation='glow' className='mb-0 d-flex align-items-center'>
						<LibraryTextWithIcon icon={<LocationIcon />} text={<></>} />
						<Placeholder xs={6} className='h-50' />
					</Placeholder>

					<Placeholder as={Card.Text} animation='glow' className='mb-0 d-flex align-items-center'>
						<LibraryTextWithIcon icon={<BookIcon />} text={<></>} />
						<Placeholder xs={2} className='h-50' />
					</Placeholder>
				</LibraryInfoContianer>
			</CardBodyBackgroundContainer>
		</Container>
	)
}

const Container = styled(Card).attrs({
	className: 'mb-3'
})`
    min-height: 125px;
`;

const Row = styled.div.attrs({
	className: 'row'
})`
`;

const Col4 = styled.div.attrs({
	className: 'col-4'
})`
`;

const LibraryNameContainer = styled.div`
    align-items: center;
`;

const LibraryName = styled.h4.attrs({
	className: 'clamp-1-line'
})`
padding-top: 5px;
`;

const LibraryInfoContianer = styled.div`
    margin-left: 50px;

    @media screen and (max-width: ${breakpoints.md}){
        margin-left: 25px;
    }
`;

export default LibraryCardLoading