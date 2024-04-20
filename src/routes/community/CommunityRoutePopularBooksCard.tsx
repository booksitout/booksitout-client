import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardBodyBackgroundContainer from '../../common/styles/CardBodyBackgroundContainer'
import CardTitle from '../../common/styles/CardTitle'
import booksitoutIcon from '../../config/booksitoutIcon'
import { usePopularBooks } from './popular-books/usePopularBooks'
import PopularBookListRow from './popular-books/PopularBookListRow'

const CommunityRoutePopularBooksCard = () => {
    const [isLoading, popularBooks] = usePopularBooks('BOOKSITOUT', 12)

    return (
        <Card>
            <CardBodyBackgroundContainer height={600}>
                <CardTitle
                    icon={<booksitoutIcon.popular />}
                    title='책잇아웃이 고른 인기책'
                    url='/community/popular-books'
                />

                <Row>
                    {popularBooks.map((book) => {
                        return (
                            <Col>
                                <PopularBookListRow popularBook={book} />
                            </Col>
                        )
                    })}
                </Row>
            </CardBodyBackgroundContainer>
        </Card>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
`;

export default CommunityRoutePopularBooksCard