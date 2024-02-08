import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import RouteTitle from '../common/RouteTitle'
import { getCategoryStatistics, getLangaugeStatistics, getReadTime } from '../../functions/statistics'
import { BsFileEarmarkBarGraphFill as StatisticsIcon } from 'react-icons/bs'
import MonthReadTimeCard from './route/MonthReadTimeCard'
import SummaryTableAllCard from './route/SummaryTableAllCard'
import LanguageSummaryCard from './route/LanguageSummaryCard'
import CategoryTableCard from './route/CategoryTableCard'
import styled from 'styled-components';
import StatisticsBookSummaryCard from './StatisticsBookSummaryCard'
import RouteContainer from '../common/RouteContainer'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const StatisticsRoute = () => {
	const navigate = useNavigate()
	const isLogin = useSelector((state: RootState) => state.user.isLogin)

	const [readTimeList, setReadTimeList] = React.useState(null)
	const [languageData, setLanguageData] = React.useState(null)
	const [categoryData, setCategoryData] = React.useState(null)

	React.useEffect(() => {
		document.title = '통계 | 책잇아웃'

		Promise.all([
			getReadTime(30).then(readTime => setReadTimeList(readTime)),
			getLangaugeStatistics().then(languageStats => setLanguageData(languageStats)),
			getCategoryStatistics().then(categoryStats => setCategoryData(categoryStats)),
		])
	}, [])

	React.useEffect(() => {
		if (!isLogin) {
			toast.error('통계는 로그인해야 이용할 수 있어요')
			navigate('/introduction')
		}
	}, [isLogin, navigate])

	return (
		<RouteContainer>
			<RouteTitle 
				icon={<StatisticsIcon />} 
				title={'독서통계'} 
				subTitle={'내 독서활동, 한 눈에 볼 수 있어요'} 
				currentKey={undefined} 
				buttons={[]} 
				rightUi={undefined} 
			/>

			<StatisticsContainer>
				<StatisticsSummaryContainer>
					<div className="row">
						<MonthReadTimeCardContainer>
							<MonthReadTimeCard readTimeList={readTimeList} />
						</MonthReadTimeCardContainer>

						<StatisticsCardContainer>
							<SummaryTableAllCard />
						</StatisticsCardContainer>

						<StatisticsCardContainer>
							<LanguageSummaryCard languageData={languageData} />
						</StatisticsCardContainer>

						<StatisticsCardContainer>
							<CategoryTableCard categoryData={categoryData} />
						</StatisticsCardContainer>
					</div>
				</StatisticsSummaryContainer>

				<BookSummaryContainer>
					<StatisticsBookSummaryCard />
				</BookSummaryContainer>
			</StatisticsContainer>
		</RouteContainer>
	)
}

const StatisticsContainer = styled.div.attrs({
	className: 'row row-eq-height',
})``

const StatisticsSummaryContainer = styled.div.attrs({
	className: 'col-12 col-xxl-8',
})``

const BookSummaryContainer = styled.div.attrs({
	className: 'col-12 col-xxl-4 mb-4 p-0',
})``

const StatisticsCardContainer = styled.div.attrs({
	className: 'col-12 col-md-6 mb-4',
})`
	min-height: 450px;
`

const MonthReadTimeCardContainer = styled.div.attrs({
	className: 'col-12 col-md-6 mb-4',
})`
	min-height: 0px;

	@media screen and (min-width: 768px) {
		min-height: 450px;
	}
`

export default StatisticsRoute