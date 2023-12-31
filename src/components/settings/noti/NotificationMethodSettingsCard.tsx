import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import CardTitle from '../../common/CardTitle'
import booksitoutIcon from '../../common/icons/booksitoutIcon';
import styled from 'styled-components';

const NotificationMethodSettingsCard = () => {
	return (
		<CardContainer>
			<Card.Body>
				<CardTitle icon={<booksitoutIcon.notification />} title={'알림 방법 설정'} />

				<Form>
					<Row>
						<Col>
							<Form.Select>
								<option>이메일</option>
								<option>안드로이드</option>
							</Form.Select>
						</Col>

						<Col>
							<ChangeButton>변경하기</ChangeButton>
						</Col>
					</Row>
				</Form>
			</Card.Body>
		</CardContainer>
	)
}

const CardContainer = styled(Card)``;

const Row = styled.div.attrs({
	className: 'row justify-content-center align-items-center',
})``

const Col = styled.div.attrs({
	className: 'col-12 col-sm-6 col-md-3 mb-3',
})``

const ChangeButton = styled(Button).attrs({
	className: 'w-100',
	variant: 'book',
})``

export default NotificationMethodSettingsCard