import styled from 'styled-components';
import useBookLastRead from './useBookLastRead'
import BookReadingSessionButton from "./reading/BookReadingSessionButton";

const BookLastReadCard = () => {
    const book = useBookLastRead()

    if (!book) return <></>

    return (
        <Row>
            <ImageContainer>
                <Image src={book.cover} />
            </ImageContainer>

            <InfoContainer href={`/book/mine/${book.id}`}>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
                <BookReadingSessionButton book={book}/>
            </InfoContainer>
        </Row>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
    width: 100%;
`;

const ImageContainer = styled.div.attrs({
    className: 'col-4'
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const InfoContainer = styled.a.attrs({
    className: 'col-8'
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0px;

    &:hover {
        color: black;
    }
`;

const Image = styled.img.attrs({
    className: 'img-fluid rounded'
})`
    width: auto;
    max-height: 135px;
    object-fit: contain;
`;

const Title = styled.h5.attrs({
    className: 'clamp-1-line'
})`
`;

const Author = styled.h6.attrs({
    className: 'text-secondary'
})`
`;

export default BookLastReadCard