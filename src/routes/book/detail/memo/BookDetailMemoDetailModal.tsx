import styled from 'styled-components';
import React from 'react'
import BookMemoResponse from '../../BookMemoResponse'
import { Button, Modal } from 'react-bootstrap'
import { booksitoutServer } from '../../../../config/booksitoutServer';
import toast from 'react-hot-toast';

interface Props {
    isOpen: boolean
    close: () => void
    memo: BookMemoResponse
}

const BookDetailMemoDetailModal: React.FC<Props> = ({ isOpen, close, memo }) => {
    return (
        <Modal show={isOpen} onHide={close} centered fullscreen='md-down' size='lg'>
            <Modal.Header closeButton>
                <Title>✏️ 메모  자세히 보기</Title>
            </Modal.Header>

            <Modal.Body>
                <PageNumber>{memo.page}</PageNumber>
                <Content>{memo.content}</Content>

                <DeleteButtonContainer>
                    <DeleteButton memo={memo} />
                </DeleteButtonContainer>
            </Modal.Body>
        </Modal>
    )
}

const DeleteButton = ({ memo }) => {
    const deleteMemo = () => {
        if (window.confirm('정말로 메모를 삭제할까요?') === false) return

        booksitoutServer
            .delete(`/v1/book/memo/${memo.id}`)
            .then(() => {
                toast.success('메모를 삭제했어요.')
                window.location.reload()
            })
            .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요.'))
    }

    return (
        <Button variant='danger' onClick={deleteMemo}>삭제</Button>
    )
}

const DeleteButtonContainer = styled.div`
    text-align: right;
`;

const Title = styled.h3`
    text-align: center;
`;

const PageNumber = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Content = styled.p`
    font-size: 1.25rem;
    white-space: pre-line;
`;

export default BookDetailMemoDetailModal