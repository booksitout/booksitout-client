import React from 'react'
import SettingsCard from './SettingsCard'
import { Button, Form } from 'react-bootstrap'
import styled from 'styled-components';
import { booksitoutServer } from '../../config/axios';
import CommunitySettingsType from './CommunitySettingsType';

const CommunityNotificationSettingsCard = () => {
	const [error, setError] = React.useState<boolean>(false)

	const [settings, setSettings] = React.useState<CommunitySettingsType[]>([])
	React.useEffect(() => {
		booksitoutServer
			.get(`v6/notification/settings`)
			.then(res => setSettings(res.data))
			.catch(() => setError(true))
	}, [])

    return (
		<SettingsCard
			title={'알림 설정'}
			content={
				<Form>
					<Row>
						<Col>
							<CommunityCheck label={'새로운 글'} checked={'POST_NEW'} settings={settings} />
							<CommunityCheck label={'새로운 독서모임 모집글'} checked={'GATHERING_NEW'} settings={settings}/>
							<CommunityCheck label={'새로운 책잇아웃 꿀팁'} checked={'TIPS'} settings={settings} />
						</Col>

						<Col>
							<CommunityCheck label={'내 글에 댓글'} checked={'COMMENT'} settings={settings} />
							<CommunityCheck label={'내 글에 좋아요 / 싫어요'} checked={'POST_LIKE'} settings={settings} />
							<CommunityCheck label={'내 댓글에 답글'} checked={'COMMENT_REPLY'} settings={settings} />
							<CommunityCheck label={'내 독서모임 모집글에 신청'} checked={'GATHERING_REQUEST'} settings={settings} />
						</Col>

						<div className="mt-4 col-12 col-md-6">
							<Button variant="book" className="w-100" disabled>
								알림 설정 저장하기
							</Button>
						</div>
					</Row>
				</Form>
			}
		/>
	)
}

const CommunityCheck = ({ label, checked, settings }) => {
	return <Check label={label} defaultChecked={settings != null && settings.find(s => s.type === checked)} />
}

const Row = styled.div.attrs({
	className: 'row justify-content-center',
})``

const Col = styled.div.attrs({
	className: 'col-12 col-md-6',
})``

const Check = styled(Form.Check).attrs({
	className: 'mt-2 switch-book',
	type: 'switch',
})``

export default CommunityNotificationSettingsCard