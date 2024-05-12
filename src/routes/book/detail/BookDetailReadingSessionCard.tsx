import styled from 'styled-components';
import IndexContentContainer from "../../index/IndexContentContainer"
import BookReadingSessionResponse from "../BookReadingSessionResponse"
import CardAddButton from '../../../common/button/CardAddButton';

interface Props {
    readingSessions: BookReadingSessionResponse[]
}

const BookDetailReadingSessionCard: React.FC<Props> = ({ readingSessions }) => {
    return (
        <IndexContentContainer>
            <CardAddButton onClick={() => alert('Hello World')}/>
            <Container>
                
            </Container>
        </IndexContentContainer>
    )
}

const Container = styled.div`
    min-height: 250px;
`;

export default BookDetailReadingSessionCard