import styled from 'styled-components';
import IndexContentContainer from "../../index/IndexContentContainer"
import BookResponse from "../BookResponse"
import RowSpacer from '../../../common/styles/RowSpacer';
import { useNavigate } from 'react-router-dom';

interface Props {
    book: BookResponse
}

const BookMineCard: React.FC<Props> = ({ book }) => {
    const navigate = useNavigate()

    return (
        <Container onClick={() => navigate(`/book/mine/${book.id}`)}>
            <IndexContentContainer>
                <ContentContainer>
                    <Cover src={book.cover} />
                    <RowSpacer size={12.5} />

                    <Title>{book.title}</Title>
                    <RowSpacer size={2.5} />
                    <Author>{book.author}</Author>
                </ContentContainer>
            </IndexContentContainer>
        </Container>
    )
}

const Container = styled.div`
    padding-left: 2.5px;
    padding-right: 2.5px;

    height: 300px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded'
})`
    max-height: 150px;
    height: auto;
    width: auto;
    max-width: 100%;
    object-fit: contain;
`;

const Title = styled.h1.attrs({
    className: 'clamp-1-line'
})`
    font-size: 15px;
    text-align: center;
`;

const Author = styled.h2.attrs({
    className: 'text-secondary'
})`
    font-size: 13px;
`;

export default BookMineCard