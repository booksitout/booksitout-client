import React from 'react'
import privacyData from './privacyData'
import { Card } from 'react-bootstrap'
import RouteContainer from '../../common/styles/RouteContainer';
import RouteTitle from '../../common/RouteTitle/RouteTitle';
import booksitoutIcon from '../../config/booksitoutIcon';

const PrivacyRoute = () => {
    return (
		<RouteContainer>
			<RouteTitle icon={<booksitoutIcon.privacy />} title={'책잇아웃의 개인정보처리방침'} />

			<div>
				{Array.from(privacyData.entries()).map(([date, content]) => (
					<a href={`/privacy/${date}`}>
						<Card>
							<Card.Header>
								<b className="text-book">{`${date.split('-')[0]}년 ${date.split('-')[1]}월 ${
									date.split('-')[2]
								}일`}</b>
							</Card.Header>

							<Card.Body>
								<div className="clamp-1-line">{content}</div>
							</Card.Body>
						</Card>
					</a>
				))}
			</div>
		</RouteContainer>
	)
}

export default PrivacyRoute