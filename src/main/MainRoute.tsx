import React from 'react'
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import PostPopular from '../community/post/PostPopular';
import MainTipsCard from '../community/tips/MainTipsCard';
import { getLastBook } from '../functions/book'
import placeholderData from './placeholderData';
import MainNoLoginPrompt from './MainNoLoginPrompt'
import MainLastReadBookCard from './MainLastReadBookCard';
import MainReadingTimeCard from './MainReadingTimeCard';
import MainSummaryStatisticsCard from './MainSummaryStatisticsCard';
import MainGoalCard from './MainGoalCard';
import GatheringSummaryCard from '../community/summaryCard/GatheringSummaryCard';
import MainLastReadBookCardLoading from './MainLastReadBookCardLoading';
import MainLibraryMembershipCard from './MainLibraryMembershipCard';
import { GoalType } from '../goal/GoalType'
import { StatisticsType } from '../types/StatisticsType';
import { booksitoutServer } from '../functions/axios';
import { BookType } from '../types/BookType'
import RouteContainer from '../common/RouteContainer';
import MainAlert from './MainAlert';
import MainIntroductionSection from './MainIntroductionSection';
import MainLoginSection from './MainLoginSection';
import styled from 'styled-components';
import './mainReadChart.css'
import { Row } from 'react-bootstrap';
import PreReleaseInfoSection from '../onboarding/PreReleaseInfoSection';

const MainRoute = () => {
	const isLogin = useSelector((state: RootState) => state.user.isLogin)

	const [goalLoading, setGoalLoading] = React.useState(true)
	const [lastBookLoading, setLastBookLoading] = React.useState(true)
	const [lastBook, setLastBook] = React.useState<BookType | null | undefined>(null)
	const [readTime, setReadTime] = React.useState<number[] | null | undefined>(null)
	const [goal, setGoal] = React.useState<GoalType | null | undefined>(null)
	const [statistics, setStatistics] = React.useState<StatisticsType | null | undefined>(null)

	React.useEffect(() => {
		if (!isLogin) {
			setReadTime(placeholderData.readTime)
			setStatistics(null)
			return
		}

		Promise.all([
			getLastBook()
				.then(res => (res.status === 204 ? setLastBook(null) : setLastBook(res.data)))
				.catch(() => setLastBook(undefined))
				.finally(() => setLastBookLoading(false)),

			booksitoutServer
				.get(`v1/statistics/read-time/${7}`)
				.then(res => setReadTime(res.data))
				.catch(() => setReadTime(undefined)),

			booksitoutServer
				.get(`v1/goal/${new Date().getFullYear()}`)
				.then(res => (res.status === 204 ? setGoal(null) : setGoal(res.data)))
				.catch(() => setGoal(undefined))
				.finally(() => setGoalLoading(false)),

			booksitoutServer
				.get(`/v3/statistics/year/${new Date().getFullYear()}`)
				.then(res => setStatistics(res.data || null))
				.catch(() => setStatistics(undefined)),
		])
	}, [isLogin])

	return (
		<RouteContainer>
			<Row>
				<PreReleaseInfoSection />
				<div className="mb-3" />

				{isLogin ? <MainAlert /> : <MainIntroductionSection />}
				<div className="mb-3" />

				{!isLogin && (
					<span className="d-md-none">
						<MainLoginSection />
						<div className="mb-3" />
					</span>
				)}

				<div className={`${isLogin ? 'd-block' : 'd-none'} d-md-block`}>
					{!isLogin && <MainNoLoginPrompt />}

					<Container style={{ opacity: isLogin ? 1.0 : 0.3, pointerEvents: isLogin ? 'auto' : 'none' }}>
						<BookCardContainer>
							{isLogin && !lastBookLoading ? (
								<MainLastReadBookCard lastBook={lastBook} />
							) : (
								<MainLastReadBookCardLoading />
							)}
						</BookCardContainer>

						<BookCardContainer>
							<MainReadingTimeCard readTime={readTime} />
						</BookCardContainer>

						<BookCardContainer className={`${!isLogin && 'md-hide'}`}>
							<MainSummaryStatisticsCard
								statistics={statistics}
								loading={statistics == null || statistics === undefined}
							/>
						</BookCardContainer>

						<BookCardContainer className={`${!isLogin && 'md-hide'}`}>
							<MainGoalCard goal={goal} loading={!isLogin || goalLoading} />
						</BookCardContainer>

						{isLogin && (
							<BookCardContainer className={`${!isLogin && 'md-hide'}`}>
								<MainLibraryMembershipCard />
							</BookCardContainer>
						)}
					</Container>
				</div>
				<div className="mb-3" />

				<div>
					<Container>
						<CommunityCardContainer>
							<PostPopular />
						</CommunityCardContainer>

						<CommunityCardContainer>
							<MainTipsCard />
						</CommunityCardContainer>

						<CommunityCardContainer>
							<GatheringSummaryCard title="지금 모집중인 독서모임" col="col-12" />
						</CommunityCardContainer>
					</Container>
				</div>
			</Row>
		</RouteContainer>
	)
}

const Container = styled.div.attrs({
	className: 'row row-eq-height',
})``

const BookCardContainer = styled.div.attrs({
	className: 'col-12 col-md-6 col-xl-4 mb-3',
})``

const CommunityCardContainer = styled.div.attrs({
	className: 'col-12 col-xl-6 mb-3',
})``

export default MainRoute