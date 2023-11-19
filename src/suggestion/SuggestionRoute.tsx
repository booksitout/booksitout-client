import React from 'react'
import RouteContainer from '../common/RouteContainer'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import styled from 'styled-components';
import EditorForm from '../common/editor/EditorForm';
import toast from 'react-hot-toast';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { booksitoutServer } from '../functions/axios';
import { useNavigate } from 'react-router-dom';
import SuggestionModal from './SuggestionModal';

const SuggestionRoute = () => {
	const navigate = useNavigate()

	const [rating, setRating] = React.useState<'GOOD' | 'NEUTRAL' | 'BAD'>('GOOD')
	const [content, setContent] = React.useState<string>('')

	const [show, setShow] = React.useState<boolean>(true)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (content === '') {
			toast.error('의견을 남겨 주세요!')
			return
		}

		const suggestion = {
			rating: rating,
			content: content
		}

		booksitoutServer
			.post('/v6/user/suggestion', suggestion)
			.then(() => {
				toast.success('제안 / 피드벡을 남겼어요. 시간 내 주셔서 감사합니다 :)')
				navigate('/')
			})
			.catch(() => {
				toast.error(
					'오류가 났어요! 잠시후 다시 시도해 주시거나 메일 주소로 보내 주시면 감사하겠습니다. booksitout@gmail.com',
				)
			})
	}

	return (
		<RouteContainer>
			<RouteTitle
				icon={<booksitoutIcon.suggestion />}
				title={'제안 / 피드백'}
				subTitle="책잇아웃을 쓰면서 좋았던 점, 불편했던 점을 자유롭게 남겨 주세요"
			/>

			<SuggestionModal show={show} setShow={setShow} />

			<FormContainer>
				<FormCard>
					<Card.Body>
						<Form onSubmit={handleSubmit}>
							<FormLabelContainer>
								<Form.Label>책잇아웃에 만족하시나요?</Form.Label>
								<Form.Select
									onSelect={e => setRating(e.currentTarget.value as 'GOOD' | 'NEUTRAL' | 'BAD')}
								>
									<option value={'GOOD'}>만족해요</option>
									<option value={'NEUTRAL'}>중립이에요</option>
									<option value={'BAD'}>불만족해요</option>
								</Form.Select>
							</FormLabelContainer>

							<FormLabelContainer>
								<Form.Label>의견을 자유롭게 남겨 주세요</Form.Label>
								<EditorForm placeholder={'의견을 남겨 주세요'} setContent={setContent} />
							</FormLabelContainer>

							<FormLabelContainer>
								<div className="row justify-content-center">
									<div className="col-12 col-md-6">
										<Button variant="book" className="w-100" type="submit">
											의견 남기기
										</Button>
									</div>
								</div>
							</FormLabelContainer>
						</Form>
					</Card.Body>
				</FormCard>
			</FormContainer>
		</RouteContainer>
	)
}

const FormContainer = styled.div.attrs({
	className: 'mt-4',
})``

const FormLabelContainer = styled.div.attrs({
	className: 'mt-3',
})``

const FormCard = styled(Card).attrs({
	className: '',
})``

export default SuggestionRoute