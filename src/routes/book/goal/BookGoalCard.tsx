import styled from 'styled-components';
import { Card, Placeholder } from 'react-bootstrap';
import goalIcon from '../../../images/statistics/goal.png'
import goalCompleteIcon from '../../../images/statistics/goal-complete.png'
import useBookGoal from './useBookGoal';
import ColSpacer from '../../../common/styles/ColSpacer';

interface Props {
    size?: number
    year?: number
}

const BookGoalCard: React.FC<Props> = ({ size = 75, year =  new Date().getFullYear()}) => {
    const [goal, isDone, isLoading] = useBookGoal(year)

    return (
        <Container>
            {isDone && (
                <GoalCompleteContainer>
                    <ImageGoalDone src={goalCompleteIcon} alt='' />
                    <GoalCompleteText>목표달성!</GoalCompleteText>
                </GoalCompleteContainer>
            )}

            <GoalContainer>
                <GoalImageContainer isDone={isDone}>
                    <Image src={goalIcon} alt='' size={size} />
                </GoalImageContainer>

                <ColSpacer size={10} />

                <GoalTextContainer isDone={isDone}>
                    <GoalText>
                        {isLoading ? (
                            <Placeholder as={Card.Text} animation='wave'>
                                <Placeholder xs='2' /> 권
                                <span> / </span>
                                <Placeholder xs='2' /> 권
                            </Placeholder>
                        ) : (
                            <>
                                <span className='text-book' style={{ fontWeight: 'bold' }}>
                                    {goal.current}
                                </span>
                                권 / {goal.total}권
                            </>
                        )}
                    </GoalText>
                </GoalTextContainer>
            </GoalContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 0px;
`;

const GoalContainer = styled.div`
    display: flex;
    justify-content: space-between;    
    align-items: center;
    flex-direction: row;
    text-align: end;
    width: 100%;
`;

const GoalCompleteContainer = styled.div`
	position: absolute;
	z-index: 1;
	opacity: 100;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const ImageGoalDone = styled.img.attrs({
    className: 'img-fluid'
})`
    height: 75px;
    text-align: center;
`;

const GoalCompleteText = styled.h5`
	font-weight: bold;
	margin-top: 10px;
`;

const GoalImageContainer = styled.div`
	opacity: ${({ isDone }) => (isDone ? '0.1' : '1.0')}
`;

const GoalTextContainer = styled.div`
	align-self: center;
	opacity: ${({ isDone }) => (isDone ? '0.1' : '1.0')}
`;

const Image = styled.img.attrs({
    className: 'img-fluid'
})`
    height: ${props => props.size}px;
`;

const GoalText = styled.h1.attrs({
    className: 'force-1-line'
})`
    font-size: ${props => props.size / 2}px;
    margin: 0px;
`;

export default BookGoalCard