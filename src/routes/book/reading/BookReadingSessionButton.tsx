import styled from 'styled-components';
import BookResponse from "../BookResponse";

interface Props {
    book: BookResponse
}

const BookReadingSessionButton: React.FC<Props> = ({book}) => {
    return (
        <Button href={`/book/users/${book.id}/reading`}>
            이어서 읽기
        </Button>
    )
}

const Button = styled.a.attrs({
    className: 'btn btn-book'
})`
    margin-top: 10px;
    width: 100%;
    
    max-width: 300px;
`;

export default BookReadingSessionButton
