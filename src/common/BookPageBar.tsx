import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap'
import BookResponse from '../routes/book/BookResponse'
import ColSpacer from './styles/ColSpacer';

interface Props {
    book: BookResponse
    isShowPage?: boolean
}

const BookPageBar: React.FC<Props> = ({ book, isShowPage = true }) => {
    return (
        <Container>
            <ProgressBarContainer>
                <ProgressBar
                    variant='book'
                    className='mt-3 mb-3'
                    now={((book.currentPage == null ? 0 : book.currentPage) / book.endPage) * 100}
                    label={`${Math.round(((book.currentPage == null ? 0 : book.currentPage) / book.endPage) * 100)}%`}
                />
            </ProgressBarContainer>

            {isShowPage && (
                <>
                    <ColSpacer />
                    <span className='force-1-line'>
                        <b className='text-book'>{`${book.currentPage == null || book.currentPage < 0 ? 0 : book.currentPage}`}</b> /{' '}
                        {`${book.endPage}`}
                    </span>
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 400px;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
`;

export default BookPageBar
