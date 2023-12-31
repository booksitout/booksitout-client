import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import CardTitle from '../../common/CardTitle';
import booksitoutIcon from '../../common/icons/booksitoutIcon';

const NotificationEmailSettingsCard = () => {
    return (
		<CardContainer>
			<Card.Body>
				<CardTitle icon={<booksitoutIcon.email />} title={'알림 이메일 설정'} />
			</Card.Body>
		</CardContainer>
	)
}

const CardContainer = styled(Card)`
	margin-top: 20px;
	min-height: 300px;
`

export default NotificationEmailSettingsCard