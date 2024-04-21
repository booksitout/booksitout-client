import React from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { booksitoutServer } from '../../../../config/booksitoutServer';
import LibraryMembershipCardLoading from '../LibraryMembershipCardLoading';
import LibraryMembershipCard from '../LibraryMembershipCard';
import LibraryMembershipAddFormImageTypeSearchCard from './LibraryMembershipAddFormImageTypeSearchCard';
import RowSpacer from '../../../../common/styles/RowSpacer';
import IndexContentContainer from '../../../index/IndexContentContainer';

const LibraryMembershipAddImageModal = ({ image, membership, setMembership, show, onHide }) => {
    const navigate = useNavigate()

    const addMembership = () => {
        toast.loading('회원증을 추가하고 있어요')

        const membershipToAdd = {
            number: membership?.number,
            typeId: membership?.typeId,
            memo: '',
        }

        booksitoutServer
            .post('/v1/library/membership', membershipToAdd)
            .then(() => {
                toast.success('회원증을 추가했어요')
                navigate('/library/membership')
            })
            .catch(() => {
                toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요')
            })
    }

    return (
        <Modal show={show} onHide={onHide} centered fullscreen="md-down pt-5" size="xl" backdrop="static">
            <Modal.Header closeButton className="text-center">
                <Title>인식된 회원증 수정하기</Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <ImageContainer>
                        <Image src={image} alt="" />
                    </ImageContainer>

                    <RecognizedResultContainer>
                        {image == null ? (
                            <></>
                        ) : membership == null ? (
                            <LibraryMembershipCardLoading />
                        ) : (
                            <div className="not-clickable">
                                <LibraryMembershipCard membership={membership} />
                            </div>
                        )}

                        <RowSpacer size={5}/>

                        <IndexContentContainer>
                            {image == null ? (
                                <></>
                            ) : membership == null ? (
                                <Card style={{ minHeight: '440px' }}></Card>
                            ) : (
                                <LibraryMembershipAddFormImageEditCard membership={membership} setMembership={setMembership} />
                            )}
                        </IndexContentContainer>
                    </RecognizedResultContainer>

                    <ButtonContainer>
                        <AddButtonContainer>
                            <Button variant="book" className="w-100" onClick={() => addMembership()}>
                                회원증 추가하기
                            </Button>
                        </AddButtonContainer>
                    </ButtonContainer>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

const LibraryMembershipAddFormImageEditCard = ({ membership, setMembership }) => {
	const selectType = (typeId) => {
		setMembership({
			...membership,
			typeId: typeId,
		})
	}

	return (
		<Card style={{ minHeight: '440px' }} className="mt-3 w-100">
			<Card.Body>
				<Form>
					<div className="d-flex align-items-center">
						<Form.Label>회원증 번호</Form.Label>
						<h6 className="ms-3 text-book">{membership?.number.length}</h6>
					</div>
					<Form.Control
						defaultValue={membership?.number ?? ''}
						onChange={e => setMembership({ ...membership, number: e.target.value })}
					/>

					<div className="mt-3" />

					<Form.Label>종류</Form.Label>
					<div style={{ minHeight: '200px' }}>
						<LibraryMembershipAddFormImageTypeSearchCard
							recognizedMembership={membership}
							selectType={selectType}
						/>
					</div>
				</Form>
			</Card.Body>
		</Card>
	)
}

const ButtonContainer = styled.div.attrs({
    className: 'row justify-content-center'
})`
`;

const AddButtonContainer = styled.div.attrs({
    className: 'col-12 col-md-6 mt-4 mb-3',
})``

const Image = styled.img.attrs({
    className: 'rounded border img-fluid',
})`
	max-height: 600px;

	@media screen and (max-width: 680px) {
		max-height: 500px;
	}
`

const Title = styled.h3`
    width: 100%;
`;

const Row = styled.div.attrs({
    className: 'row'
})`
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`;

const ImageContainer = styled.div.attrs({
    className: 'col-12 col-md-4 text-center d-none d-md-block'
})`
`;

const RecognizedResultContainer = styled.div.attrs({
    className: 'col-12 col-md-8 mt-4 mt-md-0'
})`
`;

export default LibraryMembershipAddImageModal