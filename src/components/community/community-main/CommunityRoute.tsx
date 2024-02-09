import MainTipsCard from '../tips/MainTipsCard';
import CommunityRoutePopularBookCard from './CommunityRoutePopularBookCard';
import RouteTitle from '../../common/RouteTitle';
import RouteContainer from '../../common/RouteContainer';
import styled from 'styled-components';
import booksitoutIcon from '../../common/icons/booksitoutIcon';

const CommunityRoute = () => {
	document.title = '커뮤니티 | 책잇아웃'

	return (
		<RouteContainer>
			<RouteTitle 
				icon={<booksitoutIcon.community />} 
				title={'커뮤니티'} 
				subTitle={'책에 관한 다양한 소식과 사람들을 알아갈 수 있어요'} 
				currentKey={undefined} 
				buttons={[]} 
				rightUi={undefined} 
			/>

			<Row>
				<Col4>
					<CommunityRoutePopularBookCard />
				</Col4>

				<Col8>
					<MainTipsCard />
				</Col8>

				<Mb5 />
			</Row>
		</RouteContainer>
	)
}

const Row = styled.div.attrs({
	className: 'row row-eq-height'
})``;

const Col4 = styled.div.attrs({
	className: 'col-12 col-md-4 mb-4'
})``;

const Col8 = styled.div.attrs({
	className: 'col-12 col-md-8 mb-4'
})``;

const Mb5 = styled.div.attrs({
	className: 'mb-5'
})``;

export default CommunityRoute