import styled from 'styled-components';
import React, {useEffect} from 'react'
import Modal from "../../../common/Modal";
import useReadingSessionStore from './useReadingSessionStore';
import {Button as BootstrapButton} from "react-bootstrap";
import useCurrentReadingSession from "./useCurrentReadingSession";
import {BooksitoutServer} from "../../../config/BooksitoutServer";
import RowSpacer from "../../../common/styles/RowSpacer";
import ColSpacer from "../../../common/styles/ColSpacer";
import BookPageBar from "../../../common/BookPageBar";

const BookReadingSessionModal = () => {
    const {isModalOpen, closeModal} = useReadingSessionStore()

    return (
        <Modal
            titleText={'독서활동 기록하기'}
            isShowing={isModalOpen}
            onClose={closeModal}
            body={<Body/>}
            size={'xl'}
        />
    )
}

const Body = () => {
    const {
        bookId, setReadingSessionId,
        timerInSeconds, isTimerOn,
        startTimer, resumeTimer, pauseTimer,
        openEndModal
    } = useReadingSessionStore()
    const {currentReadingSession} = useCurrentReadingSession()

    const hours = Math.floor(timerInSeconds / 3600)
    const minutes = Math.floor((timerInSeconds % 3600) / 60)
    const seconds = timerInSeconds % 60

    useEffect(() => {
        if (currentReadingSession != null && currentReadingSession.readingSession == null && bookId !== null) {
            startTimer()

            BooksitoutServer
                .post(`/v1/book/${bookId}/reading-session/start`)
                .then((res) => {
                    setReadingSessionId(res.data.id)
                })
        } else if (currentReadingSession?.readingSession != null) {
            setReadingSessionId(currentReadingSession?.readingSession?.id)
        }
    }, [currentReadingSession]);

    return (
        <>
            {
                currentReadingSession !== null && currentReadingSession.book !== null && (
                    <>
                        <BookContainer>
                            <BookCover src={currentReadingSession.book.cover ?? ''} alt={currentReadingSession.book.title}/>

                            <ColSpacer/>

                            <BookInfoContainer>
                                <BookTitle>{currentReadingSession.book.title}</BookTitle>
                                <BookAuthor>{currentReadingSession.book.author}</BookAuthor>
                                <BookPageBar book={currentReadingSession.book}/>
                            </BookInfoContainer>
                        </BookContainer>

                        <RowSpacer size={10}/>
                    </>
                )
            }

            <TimerContainer>
                {hours}시간 {minutes}분 {seconds}초
            </TimerContainer>

            <TimerButtonContainer>
                <Button
                    variant={isTimerOn ? 'pause' : 'resume'}
                    onClick={isTimerOn ? pauseTimer : resumeTimer}
                >
                    {isTimerOn ? '일시정지' : '재시작'}
                </Button>

                <Button variant={'book'} onClick={openEndModal}>
                    독서활동 끝내기
                </Button>
            </TimerButtonContainer>
        </>
    )
}

const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookCover = styled.img.attrs({
    className: 'img-fluid rounded border'
})`
    max-height: 100px;
`;

const BookInfoContainer = styled.div.attrs({})`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const BookTitle = styled.h1`
    font-size: 1.2rem;
`;

const BookAuthor = styled.h2.attrs({
    className: 'text-secondary'
})`
    font-size: 1rem;
`;

const TimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin: 1rem;
`

const TimerButtonContainer = styled.div.attrs({
    className: 'row'
})`
    justify-content: center;
    align-items: center;
    margin: 1rem;
`

const Button = styled(BootstrapButton).attrs({
    className: 'col-6 col-md-4'
})`
    margin-left: 10px;
    margin-right: 10px;
`

export default BookReadingSessionModal
