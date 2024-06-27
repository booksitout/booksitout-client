import styled from 'styled-components';
import { Card } from "react-bootstrap"
import CardBodyContainer from "../../../common/styles/CardBodyContainer"
import { usePopularBooks } from "../../community/popular-books/usePopularBooks"
import PopularBookListRowLoading from '../../community/popular-books/PopularBookListRowLoading';
import PopularBookListRow from '../../community/popular-books/PopularBookListRow';
import CardTitle from '../../../common/styles/CardTitle';
import BooksitoutLogo from '../../../common/BooksitoutLogo';

const IndexPopularBookCard = () => {
    const [isLoading, popularBooks] = usePopularBooks('BOOKSITOUT', 10)

    return (
        <Card>
            <CardBodyContainer>
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

            </CardBodyContainer>
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


export default IndexPopularBookCard