import styled from 'styled-components';
import React, {useState} from 'react'
import Modal from '../../../common/Modal';
import useReadingSessionStore from "./useReadingSessionStore";
import {Button, Form} from "react-bootstrap";
import RowSpacer from "../../../common/styles/RowSpacer";
import {BooksitoutServer} from "../../../config/BooksitoutServer";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

const BookReadingSessionEndModal = () => {
    const {
        isEndModalOpen, closeEndModal,
        timerInSeconds,
    } = useReadingSessionStore()

    return (
        <Modal
            titleText={null}
            isShowing={isEndModalOpen}
            onClose={closeEndModal}
            body={<Body/>}
            size={'md'}
        />
    )
}

const Body = () => {
    const navigate = useNavigate()

    const {
        resetTimer,
        closeEndModal,
        bookId, readingSessionId, timerInSeconds
    } = useReadingSessionStore()

    const [page, setPage] = useState<string | null>()

    const handleSave = (e) => {
        e.preventDefault()

        const body = {
            endTime: new Date(),
            readingTimeInMinutes: timerInSeconds / 60,
            startPage: null,
            endPage: page,
        }

        BooksitoutServer
            .post(`/v1/book/reading-session/${readingSessionId}/end`, body)
            .then((res) => {
                toast.success('독서활동을 저장했어요')
                navigate(`/book/mine/${bookId}`)
                resetTimer()
            })
            .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요'))
    }

    const handleDelete = () => {
        BooksitoutServer
            .delete(`/v1/book/reading-session/end`)
            .then(() => {
                toast.success('독서활동을 삭제했어요.')
                navigate(`/book/mine/${bookId}`)
                resetTimer()
            })
            .catch(() => toast.error('오류가 났어요. 잠시 후 다시 시도해 주세요'))
    }

    return (
        <Form onSubmit={handleSave}>
            <Title>읽은 페이지를 입력해 주세요</Title>
            <Form.Control type="number" placeholder={'읽은 페이지'} onChange={(e) => setPage(e.target.value)}/>
            <RowSpacer/>

            {/*<Button variant={'book'} className={'w-100'}>읽은 시간으로 추측하기</Button>*/}

            <ButtonsContainer>
                <ButtonContainer onClick={handleDelete}>
                    <Button variant={'book'} className={'w-100'}>저장하지 않기</Button>
                </ButtonContainer>

                <ButtonContainer>
                    <Button variant={'book'} className={'w-100'} type={'submit'}>{page == null || page == '' ? '페이지 없이 저장하기' : '저장하기'}</Button>
                </ButtonContainer>
            </ButtonsContainer>

            <RowSpacer size={10}/>

            <CancelButtonContainer>
                <CancelButton onClick={closeEndModal}>취소</CancelButton>
            </CancelButtonContainer>
        </Form>
    )
}

const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`

const ButtonsContainer = styled.div.attrs({
    className: 'row'
})`
`

const ButtonContainer = styled.div.attrs({
    className: 'col-12 col-md-6'
})`
`

const CancelButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const CancelButton = styled(Button).attrs({
    variant: 'book-danger'
})`
    width: 75%;
`

export default BookReadingSessionEndModal
