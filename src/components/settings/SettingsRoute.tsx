import RouteTitle from "../common/RouteTitle"
import SettingsLinkCard from "./SettingsLinkCard"
import booksitoutIcon from '../common/icons/booksitoutIcon';
import styled from 'styled-components';
import RouteContainer from "../common/RouteContainer";
import { settingsRouteButtons } from "./settingsUi";

const SettingsRoute = () => {
	return (
		<RouteContainer>
			<div className="row row-eq-height justify-content-start">
				<RouteTitle 
					icon={<booksitoutIcon.settings />} 
					title={'설정'} 
					subTitle={null} 
					currentKey={'all'} 
					buttons={settingsRouteButtons} 
					rightUi={null} 
				/>

				<SettingsCardContainer>
					<SettingsLinkCard
						title="검색 설정"
						contentList={['검색할 곳 지정', '내 책 검색 범위 지정', '도서관 검색 설정']}
						link="/settings/search"
					/>
				</SettingsCardContainer>

				<SettingsCardContainer>
					<SettingsLinkCard
						title={'내 공개 프로필 설정'}
						contentList={['이름', '프로필 이미지', '책 공개 여부']}
						link={'/settings/public-profile'}
					/>
				</SettingsCardContainer>
			</div>
		</RouteContainer>
	)
}

const SettingsCardContainer = styled.div.attrs({
	className: 'col-12 col-md-6 mb-1 mb-md-2',
})``

export default SettingsRoute
