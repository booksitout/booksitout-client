import React from 'react'
import RouteContainer from '../common/RouteContainer'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon'
import privacyData from './privacyData'
import styled from 'styled-components';
import { Card } from 'react-bootstrap'

const PrivacyRoute = () => {
    return (
		<RouteContainer>
			<RouteTitle icon={<booksitoutIcon.privacy />} title={'책잇아웃의 개인정보처리방침'} />

			<Container>
				{Array.from(privacyData.entries()).map(([date, content]) => (
					<a href={`/privacy/${date}`}>
						<CardContainer>
							<Card.Header>
								<b className="text-book">{`${date.split('-')[0]}년 ${date.split('-')[1]}월 ${
									date.split('-')[2]
								}일`}</b>
							</Card.Header>

							<Card.Body>
								<div className="clamp-1-line">{content}</div>
							</Card.Body>
						</CardContainer>
					</a>
				))}
			</Container>
		</RouteContainer>
	)
}

const Container = styled.div.attrs({
	className: '',
})``

const CardContainer = styled(Card).attrs({
	className: '',
})``

export default PrivacyRoute