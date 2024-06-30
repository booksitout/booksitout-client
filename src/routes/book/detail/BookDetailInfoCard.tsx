import styled from 'styled-components';
import IndexContentContainer from "../../index/IndexContentContainer"
import BookResponse from "../BookResponse"
import BookPageBar from '../../../common/BookPageBar';
import RowSpacer from '../../../common/styles/RowSpacer';
import BookReadingSessionButton from "../reading/BookReadingSessionButton";

interface Props {
    book: BookResponse
}

const BookDetailInfoCard: React.FC<Props> = ({book}) => {
    return (
        <IndexContentContainer isNotHover={true}>
            <Container>
                <CoverContainer>
                    <Cover src={book.cover} alt={book.title}/>
                </CoverContainer>

                <InfoContainer>
                    <div className="d-block d-md-none">
                        <RowSpacer/>
                    </div>

                    <Title>{book.title}</Title>
                    <Author>{book.author}</Author>

                    <RowSpacer/>

                    <BookPageContainer>
                        <BookPageBar book={book}/>
                    </BookPageContainer>

                    <RowSpacer/>
                    <Center>
                        <BookReadingSessionButton book={book}/>
                    </Center>
                </InfoContainer>
            </Container>
        </IndexContentContainer>
    )
}

const Container = styled.div.attrs({
    className: 'row'
})`
    width: 100%;
    align-items: center;
    padding: 0px;
    margin: 0px;
`;

const CoverContainer = styled.div.attrs({
    className: 'col-12 col-md-4'
})`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
`;

const Cover = styled.img.attrs({
    className: 'rounded border'
})`
    max-height: 250px;
`;

const InfoContainer = styled.div.attrs({
    className: 'col-12 col-md-8'
})`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 1.2rem;
`;

const Author = styled.h2.attrs({
    className: 'text-secondary'
})`
    font-size: 1rem;
`;

const BookPageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Center = styled.div `
    display: flex;
    justify-content: center;
`

export default BookDetailInfoCard