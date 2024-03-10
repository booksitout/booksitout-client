import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import breakpoints from '../config/breakpoints';

const TimerFloatingButton = ({ url = '/reading' }) => {
	const time: number = 0
	const token: string | null = ''

	return (
		<>
			{token !== '' && token !== null ? (
				time == null || time === 0 || typeof time === 'undefined' ? (
					<></>
				) : (
					<ButtonContainer variant='book' href={url}>
						<h6 className='mt-1 mb-0'>{`${Math.floor((time / 60 / 60) % (60 * 60))}H `}</h6>
						<h6 className='mt-0' style={{ whiteSpace: 'nowrap' }}>
							{Math.floor(time / 60) % 60}M {`${time % 60}S`}
						</h6>
					</ButtonContainer>
				)
			) : (
				<></>
			)}
		</>
	)
}

const ButtonContainer = styled(Button)`
	position: fixed;
	right: 20px;
	bottom: 90px;

	width: 90px;
	height: 60px;

	border-radius: 10px;

	@media screen and (min-width: ${breakpoints.md}) {
		right: 30px;
		bottom: 100px;
	}

	@media screen and (min-width: ${breakpoints.xl}) {
		right: 60px;
		bottom: 130px;	
	}
`;



export default TimerFloatingButton
