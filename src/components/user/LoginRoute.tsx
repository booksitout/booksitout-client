import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import urls from '../settings/urls'
import messages from '../settings/messages'
import { RootState } from '../../redux/store'
import MainLogin from '../main/MainLogin'
import styled from 'styled-components';

const LoginRoute = () => {
	const navigate = useNavigate()
	const isLogin = useSelector((state: RootState) => state.user.isLogin)
	
	React.useEffect(() => {
		if (isLogin) {
			navigate('/')
		}
	}, [isLogin, navigate])

	return (
		<Container>
			<Row>
				<MT/>

				<Col>
					<LoginCard />
				</Col>

				<Col>
					<IntroductionCard />
				</Col>

				<Col>
					<QuestionCard />
				</Col>
			</Row>
		</Container>
	)
}

const Container = styled.div.attrs({
	className: 'container mt-5'
})``;

const Row = styled.div.attrs({
	className: 'row row-eq-height justify-content-center'
})``;

const Col = styled.div.attrs({
	className: "col-12 mb-4"
})``;


const MT = styled.div.attrs({
	className: "mt-3"
})``;

const LoginCard = () => {
	return (
		<Card className="text-center">
			<Card.Body>
				<MainLogin />
			</Card.Body>
		</Card>
	)
}

const IntroductionCard = () => {
	return (
		<a href={urls.local.introduction} className="text-decoration-none text-black h-100">
		<Card className="h-100">
			<Card.Body className="text-center">
				<h4>{messages.user.login.label.introduction}</h4>

				<h6 className="mt-5">불편한 독서생활을 편하게하는,</h6>
				<h6 className="mb-4">책잇아웃을 더 알고 싶으면 여기를 클릭해 주세요</h6>
			</Card.Body>
		</Card>
		</a>
	)
}

const QuestionCard = () => {
	return (
		<Card className="h-100">
			<Card.Body className="text-center">
				<h4 className="text-center">{messages.user.login.label.faqQna}</h4>

				<div className="row row-eq-height mt-3">
					<div className="col-12 col-md-6">
						<a href={urls.local.faq} className="text-decoration-none text-black">
							<Card className="mb-3">
								<Card.Header>{messages.user.login.label.faq.title}</Card.Header>
								<Card.Body>{messages.user.login.label.faq.content}</Card.Body>
							</Card>
						</a>
					</div>

					<div className="col-12 col-md-6">
						<a href={urls.local.qna} className="text-decoration-none text-black">
							<Card className="mb-3">
								<Card.Header>{messages.user.login.label.qna.title}</Card.Header>
								<Card.Body>{messages.user.login.label.qna.content}</Card.Body>
							</Card>
						</a>
					</div>
				</div>
			</Card.Body>
		</Card>
	)
}

export default LoginRoute
