import MainTipsCard from '../tips/MainTipsCard';
import CommunityRoutePopularBookCard from './CommunityRoutePopularBookCard';
import { BsPeopleFill as CommunityIcon } from 'react-icons/bs'
import RouteTitle from '../../common/RouteTitle';
import RouteContainer from '../../common/RouteContainer';

const CommunityRoute = () => {
	document.title = '커뮤니티 | 책잇아웃'

	return (
		<RouteContainer>
			<RouteTitle icon={<CommunityIcon />} title={'커뮤니티'} subTitle={'책에 관한 다양한 소식과 사람들을 알아갈 수 있어요'} currentKey={undefined} buttons={[]} rightUi={undefined} />

			<div className='row row-eq-height'>
				<div className='col-12 col-md-4 mb-4'>
					<CommunityRoutePopularBookCard />
				</div>

				<div className='col-12 col-md-8 mb-4'>
					<MainTipsCard />
				</div>

				<div className='mb-5' />
			</div>
		</RouteContainer>
	)
}

export default CommunityRoute