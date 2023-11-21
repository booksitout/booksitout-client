import goalIcon from './images/goal.png'
import goalCompleteIcon from './images/goal-complete.png'
import { Card, Placeholder } from 'react-bootstrap'
import Error from '../common/Error';
import NoContent from '../common/NoContent';
import styled from 'styled-components';

const Goal = ({ goal, loading = false }) => {
	return (
		<div className='d-flex text-center w-100 h-100 justify-content-center align-items-center'>
			{goal === undefined ? (
				<Error />
			) : (
				<>
					{goal != null && goal.current >= goal.goal && (
						<GoalCompleteContainer>
							<img src={goalCompleteIcon} className='img-fluid' alt='' />
							<GoalCompleteText>목표달성!</GoalCompleteText>
						</GoalCompleteContainer>
					)}

					<div className='row w-100'>
						{(goal !== null || loading) && (
							<GoalImageContainer goal={goal}>
								<img src={goalIcon} alt='' className='img-fluid' style={{ height: '150px' }} />
							</GoalImageContainer>
						)}

						<GoalTextContainer goal={goal}>
							<h1 className='force-1-line p-2'>
								{loading ? (
									<Placeholder as={Card.Text} animation='wave'>
										<Placeholder xs='2' /> 권<span> / </span>
										<Placeholder xs='2' /> 권
									</Placeholder>
								) : goal === null ? (
									<NoContent iconSize={3} />
								) : (
									<>
										<span className='text-book' style={{ fontWeight: 'bold' }}>
											{goal.current}
										</span>
										권 / {goal.goal}권
									</>
								)}
							</h1>
						</GoalTextContainer>
					</div>
				</>
			)}
		</div>
	)
}

const GoalCompleteContainer = styled.div`
	width: 180px; 
	left: 50%; 
	top: 50%; 
	transform: translate(-50%, -50%);
	z-index: 1;
	position: absolute;
	opacity: 100;
`;

const GoalCompleteText = styled.h3`
	font-weight: bold;
	margin-top: 10px;
`;

const GoalImageContainer = styled.div.attrs({
	className: 'col-12 align-self-center'
})`
	opacity: ${({ goal }) => ((goal?.current ?? 1) >= (goal?.goal ?? 0) ? '0.1' : '1.0')}
`;

const GoalTextContainer = styled.div.attrs({
	className: 'col-12'
})`
	align-self: center;
	opacity: ${({ goal }) => ((goal?.current ?? 1) >= (goal?.goal ?? 0) ? '0.1' : '1.0')}
`;

export default Goal
