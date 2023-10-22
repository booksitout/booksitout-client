import RouteTitle from "../common/RouteTitle"
import SettingsLinkCard from "./SettingsLinkCard"
import booksitoutIcon from '../common/icons/booksitoutIcon';
import styled from 'styled-components';
import RouteContainer from "../common/RouteContainer";
import { Container } from "react-bootstrap";

const SettingsRoute = () => {
	return (
		<Container>
			<div className="row row-eq-height justify-content-start">
				<RouteTitle icon={<booksitoutIcon.settings />} title={'설정'} />

				<SettingsCardContainer>
					<SettingsLinkCard
						title="개인 정보 수정"
						contentList={['이메일 변경', '비밀번호 변경', '이름 변경']}
						link="/settings/personal-info"
					/>
				</SettingsCardContainer>

				<SettingsCardContainer>
					<SettingsLinkCard
						title="검색 설정"
						contentList={['검색할 곳 지정', '내 책 검색 범위 지정', '도서관 검색 설정']}
						link="/settings/search"
					/>
				</SettingsCardContainer>

				<SettingsCardContainer>
					<SettingsLinkCard
						title="커뮤니티 설정"
						contentList={['커뮤니티 프로필 설정', '알림 설정']}
						link="/settings/community"
					/>
				</SettingsCardContainer>

				<SettingsCardContainer>
					<SettingsLinkCard
						title={'알림 설정'}
						contentList={['알림 방법 설정', '알림 메일 주소 설정']}
						link={'/settings/notification'}
					/>
				</SettingsCardContainer>
			</div>
		</Container>
	)
}

const SettingsCardContainer = styled.div.attrs({
	className: 'col-12 col-md-6 mb-1 mb-md-2',
})``

export default SettingsRoute
