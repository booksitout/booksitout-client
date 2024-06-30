import styled from 'styled-components';
import { useEffect } from "react"
import RouteContainer from "../../../common/styles/RouteContainer"
import RouteTitle from "../../../common/RouteTitle/RouteTitle"
import booksitoutIcon from "../../../config/BooksitoutIcon"
import RouteTitleConfig from "../../../config/RouteTitleConfig"
import RowSpacer from '../../../common/styles/RowSpacer';
import PopularBooksAladinCard from './PopularBooksAladinCard';
import PopularBooksKyoboCard from './PopularBooksKyoboCard';
import PopularBooksYes24Card from './PopularBooksYes24Card';
import PopularBooksBooksitoutCard from '../PopularBooksBooksitoutCard';

const CommunityPopularBooksRoute = () => {
    useEffect(() => {
        document.title = '인기책 | 책잇아웃'
    }, [])

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.community />}
                title={'인기책'}
                subTitle={'지금 책잇아웃에서 인기 있는 책을 만나보세요'}
                currentKey={'popular'}
                buttons={RouteTitleConfig.Community}
                rightUi={undefined}
            />
            <RowSpacer />

            <Row>
            <Col>
                    <PopularBooksBooksitoutCard />
                </Col>

                <Col>
                    <PopularBooksAladinCard />
                </Col>

                <Col>
                    <PopularBooksYes24Card />
                </Col>

                <Col>
                    <PopularBooksKyoboCard />
                </Col>
            </Row>
        </RouteContainer>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 mb-4'
})`
`;

export default CommunityPopularBooksRoute