import styled from 'styled-components';
import BookGoalCard from "../goal/BookGoalCard"
import ContentContainer from '../../../common/styles/ContentContainer';

const BookMineGoalCard = () => {
    return (
        <Container>
            <ContentContainer href='/book/goal'>
                <BookGoalCard size={40} />
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: end;
    
    max-height: 200px;
    width: 100%;
`;

export default BookMineGoalCard