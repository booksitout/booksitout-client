import {Button} from 'react-bootstrap'
import styled from 'styled-components';
import breakpoints from '../../config/Breakpoints';
import useReadingSessionStore from '../../routes/book/reading/useReadingSessionStore';
import useLoginStore from '../../routes/login/useLoginStore';

const TimerFloatingButton = () => {
    const {timerInSeconds, isShowingTimer, openModal} = useReadingSessionStore()
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn)

    return (
        <>
            {isLoggedIn && isShowingTimer() && (
                <ButtonContainer variant='book' onClick={openModal}>
                    <h6 className='mt-1 mb-0'>{`${Math.floor((timerInSeconds / 60 / 60) % (60 * 60))}H `}</h6>
                    <h6 className='mt-0' style={{whiteSpace: 'nowrap'}}>
                        {Math.floor(timerInSeconds / 60) % 60}M {`${timerInSeconds % 60}S`}
                    </h6>
                </ButtonContainer>
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
