import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'
import RouteContainer from './styles/RouteContainer';

const Footer = () => {
	return (
		<RouteContainer>
			<Container>
				<ServiceName>
					<ServiceLogo>
						<img src={logo} alt="" className="img-fluid" />
					</ServiceLogo>

					<ServiceText>책잇아웃 (booksitout)</ServiceText>
				</ServiceName>

				<InfoContainer>
					<Info>사업자 등록번호 595-64-00704 | 대표 박진겸</Info>
					{/* <Info>통신판매업 신고번호 2023-서울강남-00000</Info> */}
					<InfoLink href="/privacy/2023-7-1">개인정보처리방침</InfoLink>
					<Info>booksitout@gmail.com</Info>
				</InfoContainer>
			</Container>
		</RouteContainer>
	)
}

const Container = styled.div.attrs({
	className: 'container-fluid',
})`
	max-width: 1920px;
	overflow-x: hidden;
	overflow-y: hidden;

    justify-content: left;
    text-align: left;

	padding-left: 0px;
	padding-right: 0px;
`

const ServiceName = styled.div.attrs({
	className: '',
})`
    display: flex;
    align-items: center;
    justify-content: left;
`

const ServiceLogo = styled.div.attrs({
	className: '',
})`
    width: 25px;
    height: 25px;
`

const ServiceText = styled.h6.attrs({
	className: '',
})`
    margin-left: 10px;
    padding-top: 10px;
`

const InfoContainer = styled.div.attrs({
	className: 'text-secondary',
})`
    margin-top: 10px;
`

const Info = styled.div.attrs({
	className: '',
})``

const InfoLink = styled.a.attrs({
	className: 'text-secondary',
})``

export default Footer