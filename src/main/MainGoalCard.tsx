import { Card } from 'react-bootstrap'
import Goal from '../goal/Goal'
import CardTitle from '../common/CardTitle'
import Error from '../common/Error';
import NoContent from '../common/NoContent';
import booksitoutIcon from '../common/icons/booksitoutIcon';
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';

const MainGoalCard = ({ goal, loading }) => {
	return (
		<Card className="h-100" style={{ minHeight: '380px' }}>
			<Card.Body className="h-100">
				<a href="/goal" className="text-black h-100">
					<CardTitle
						icon={<booksitoutIcon.goal />}
						title={`${new Date().getFullYear()}년 목표`}
						iconSize={1}
					/>

					{loading ? (
						<GoalContainer>
							<Goal goal={goal} loading={true} />
						</GoalContainer>
					) : goal === undefined ? (
						<Error />
					) : goal == null ? (
						<NoContent message={`${new Date().getFullYear()}년 목표가 없어요`} move={30} />
					) : (
						<GoalContainer>
							<Goal goal={goal} loading={false} />
						</GoalContainer>
					)}
				</a>
			</Card.Body>
		</Card>
	)
}

const GoalContainer = styled.div.attrs({
	className: 'd-flex align-items-center',
})`
	transform: translateY(-10px);
	height: 85%;
	
	@media screen and (min-width: ${breakpoints.md}) {
		transform: translateY(-25px);
	}
`

export default MainGoalCard
