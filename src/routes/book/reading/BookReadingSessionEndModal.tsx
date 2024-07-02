import styled from 'styled-components';
import React, {useState} from 'react'
import Modal from '../../../common/Modal';
import useReadingSessionStore from "./useReadingSessionStore";
import {Button as BootstrapButton, Form} from "react-bootstrap";
import RowSpacer from "../../../common/styles/RowSpacer";
import {BooksitoutServer} from "../../../config/BooksitoutServer";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

const BookReadingSessionEndModal = () => {
    const {isEndModalOpen, closeEndModal,} = useReadingSessionStore()

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
            .then(() => {
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

            <Row>
                <Col>
                    <Button variant={'book'} onClick={handleDelete}>
                        저장하지 않기
                    </Button>
                </Col>

                <Col>
                    <Button variant={'book'} type={'submit'}>
                        {page == null || page == '' ? '페이지 없이 저장하기' : '저장하기'}
                    </Button>
                </Col>

                <Col>
                    <CancelButton onClick={closeEndModal}>취소</CancelButton>
                </Col>
            </Row>
        </Form>
    )
}

const Title = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`

const Row = styled.div.attrs({
    className: 'row'
})`
    justify-content: center;
`

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 mt-2'
})`
`

const Button = styled(BootstrapButton).attrs({
})`
    width: 100%;
`

const CancelButton = styled(Button).attrs({
    variant: 'book-danger',
})`
`

export default BookReadingSessionEndModal
