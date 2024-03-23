import styled from 'styled-components';
import SearchBookResponse from './SearchBookResponse'
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import RowSpacer from '../../../common/styles/RowSpacer';
import { useNavigate } from 'react-router-dom';

interface Props {
    book: SearchBookResponse
}

const SearchBookCard: React.FC<Props> = ({ book }) => {
    const navigate = useNavigate()

    return (
        <Card className='clickable' onClick={() => navigate(`/search/${book.isbn13}?q=${book.title}`)}>
            <CardBodyContainer height={150}>
                <Container>
                    <CoverContainer>
                        <Cover src={book.cover} alt={book.title} />
                    </CoverContainer>

                    <RowSpacer size={10} />

                    <InfoContainer>
                        <Title>{book.title}</Title>
                        <Authors>{book.authors}</Authors>
                    </InfoContainer>
                </Container>
            </CardBodyContainer>
        </Card>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
    padding-left: 20px;
    padding-right: 20px;
`;

const CoverContainer = styled.div`
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded border'
})`
    height: 200px;
`;

const InfoContainer = styled.div`
    text-align: center;
`;

const Title = styled.h1.attrs({
    className: 'clamp-1-line'
})`
    font-size: 20px;
`;

const Authors = styled.div.attrs({
    className: 'text-secondary clamp-1-line'
})`
`;

export default SearchBookCard