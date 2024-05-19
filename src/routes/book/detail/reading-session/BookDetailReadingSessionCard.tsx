import styled from 'styled-components';
import IndexContentContainer from "../../../index/IndexContentContainer"
import BookReadingSessionResponse from "../../BookReadingSessionResponse"
import CardAddButton from '../../../../common/button/CardAddButton';

interface Props {
    readingSessions: BookReadingSessionResponse[]
}

const BookDetailReadingSessionCard: React.FC<Props> = ({ readingSessions }) => {
    return (
        <IndexContentContainer>
            <CardAddButton onClick={() => alert('Hello World')}/>
            <Container>
                <EmptyCase />
            </Container>
        </IndexContentContainer>
    )
}

const EmptyCase = () =>{
    return (
        <EmptyCaseContainer>
            <EmptyCaseText>📚 기록하신 독서 활동이 없어요!</EmptyCaseText>
        </EmptyCaseContainer>
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