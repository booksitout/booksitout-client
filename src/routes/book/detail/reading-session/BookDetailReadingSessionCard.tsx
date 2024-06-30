import styled from 'styled-components';
import IndexContentContainer from "../../../index/IndexContentContainer"
import React from "react";
import BookReadingSessionResponse from "../../BookReadingSessionResponse"
import CardAddButton from '../../../../common/button/CardAddButton';
import ContentContainer from "../../../../common/styles/ContentContainer";
import RowSpacer from "../../../../common/styles/RowSpacer";
import utils from "../../../../common/utils";

interface Props {
    readingSessions: BookReadingSessionResponse[]
}

const BookDetailReadingSessionCard: React.FC<Props> = ({readingSessions}) => {
    return (
        <IndexContentContainer>
            <CardAddButton onClick={() => alert('Hello World')}/>

            <Container>
                {
                    readingSessions.length > 0 ?
                        <NonEmptyCase readingSessions={readingSessions}/>
                        :
                        <EmptyCase/>
                }
                <EmptyCase/>
            </Container>
        </IndexContentContainer>
    )
}

const EmptyCase = () => {
    return (
        <EmptyCaseContainer>
            <EmptyCaseText>📚 기록하신 독서 활동이 없어요!</EmptyCaseText>
        </EmptyCaseContainer>
    )
}

const NonEmptyCase: React.FC<Props> = ({readingSessions}) => {
    return (
        <>
            {
                readingSessions.map((readingSession) => {
                    return (
                        <>
                            <ContentContainer key={readingSession.id}>
                                {readingSession.startPage ?? '?'}쪽 부터 {readingSession.endPage ?? '?'}쪽까지 {readingSession.readTimeInMinutes ?? '?'}분 동안
                                {' '}{utils.formatTime(readingSession.startTime?.toString() ?? null) ?? '?'}부터 {utils.formatTime(readingSession.endTime?.toString() ?? null) ?? '?'}까지 읽었어요!
                            </ContentContainer>
                            <RowSpacer size={10}/>
                        </>
                    )
                })
            }
        </>
    )
}

const EmptyCaseContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: black;
`;

const EmptyCaseText = styled.h3`
    text-align: center;
`;

const Container = styled.div`
    min-height: 250px;
    width: 100%;
`;

export default BookDetailReadingSessionCard