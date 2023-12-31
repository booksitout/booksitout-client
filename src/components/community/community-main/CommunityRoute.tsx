import MainTipsCard from '../tips/MainTipsCard';
import GatheringSummaryCard from '../summaryCard/GatheringSummaryCard';
import CommunityRoutePopularBookCard from './CommunityRoutePopularBookCard';
import CommunityRoutePostCard from './CommunityRoutePostCard'
import { BsPeopleFill as CommunityIcon } from 'react-icons/bs'
import RouteTitle from '../../common/RouteTitle';
import RouteContainer from '../../common/RouteContainer';

const CommunityRoute = () => {
	document.title = '커뮤니티 | 책잇아웃'

	return (
		<RouteContainer>
			<RouteTitle icon={<CommunityIcon />} title={'커뮤니티'} />

			<div className='row row-eq-height'>
				<div className='col-12 col-md-4 mb-4'>
					<CommunityRoutePopularBookCard />
				</div>

				<div className='col-12 col-md-8 mb-4'>
					<CommunityRoutePostCard />
				</div>

				{/* <div className='col-12 mb-4'>
					<GatheringSummaryCard />
				</div> */}

				<div className='col-12 mb-4'>
					<MainTipsCard />
				</div>

				<div className='mb-5' />
			</div>
		</RouteContainer>
	)
}

export default CommunityRoute