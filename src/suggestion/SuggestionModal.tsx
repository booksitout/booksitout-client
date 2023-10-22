import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';

const SuggestionModal = ({show, setShow}) => {
    return (
		<Modal show={show} onHide={() => setShow(false)} centered size="xl">
			<Modal.Header closeButton className=" text-center">
				<h2 className="w-100">제안 / 피드백</h2>
			</Modal.Header>

			<Modal.Body>
				<TextContainer>
					<Text>먼저, 시간을 내 책잇아웃에 대한 의견을 남겨주셔서 진심으로 감사드립니다.</Text>
					<Text>남겨주신 의견은 꼼꼼히 읽고 있습니다.</Text>
					<Text>어떤 의견이라도 도움이 되니 자유롭게 남겨 주세요.</Text>
				</TextContainer>

				<ButtonContainer>
					<Button variant="book" className="col-12 col-md-6" onClick={() => setShow(false)}>
						확인
					</Button>
				</ButtonContainer>
			</Modal.Body>
		</Modal>
	)
}

const TextContainer = styled.div.attrs({
	className: '',
})``

const Text = styled.div.attrs({
	className: 'text-secondary',
})`
	font-size: 15px;
	font-weight: 450;

	@media screen and (min-width: ${breakpoints.md}) {
		font-size: 20px;
	}
`

const ButtonContainer = styled.div.attrs({
	className: 'mt-4 row justify-content-center',
})``

export default SuggestionModal