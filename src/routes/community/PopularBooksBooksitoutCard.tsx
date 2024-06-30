import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardBodyContentContainer from '../../common/styles/CardBodyContentContainer'
import CardTitle from '../../common/styles/CardTitle'
import { usePopularBooks } from './popular-books/usePopularBooks'
import PopularBookListRow from './popular-books/PopularBookListRow'
import PopularBookListRowLoading from './popular-books/PopularBookListRowLoading';
import BooksitoutLogo from '../../common/BooksitoutLogo';

const PopularBooksBooksitoutCard = () => {
    const [isLoading, popularBooks] = usePopularBooks('BOOKSITOUT', 10)

    return (
        <Card>
            <CardBodyContentContainer height={600}>
                <CardTitle
                    icon={<BooksitoutLogo />}
                    title='책잇아웃 베스트셀러'
                    url='/community/popular-books/booksitout'
                />

                <Row>
                    {isLoading ?
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => 
                            <Col>
                                <PopularBookListRowLoading index={index} />
                            </Col>
                        )
                        :
                        popularBooks.map((book) => {
                            return (
                                <Col>
                                    <PopularBookListRow popularBook={book} />
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </CardBodyContentContainer>
        </Card>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12'
})`
`;

export default PopularBooksBooksitoutCard