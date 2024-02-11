import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import urls from '../settings/urls'
import messages from '../settings/messages'
import { RootState } from '../../redux/store'
import MainLogin from '../main/MainLogin'
import styled from 'styled-components';
import parse from 'html-react-parser'
import { faqData } from '../info/faqData';
import AllButton from '../common/AllButton'

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
			<Card.Body>
				<h4 className="text-center mt-3">{messages.user.login.label.faqQna}</h4>

				<div className="text-start mt-5">
					{faqData.map(faq => {
						return (
							<Card className="mt-4">
								<Card.Header className="text-white border-0" style={{ background: '#1cb15a' }}>
									<h5 className="mt-1">{faq.question}</h5>
								</Card.Header>

								<Card.Body>{parse(faq.answer)}</Card.Body>
							</Card>
						)
					})}
				</div>

				<div className="mb-5">
					<AllButton url={'/faq'}/>
				</div>
			</Card.Body>
		</Card>
	)
}

export default LoginRoute
