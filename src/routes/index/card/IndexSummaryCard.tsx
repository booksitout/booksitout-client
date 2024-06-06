import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import useLoginStore from '../../login/useLoginStore';
import BookStatisticsTable from '../../book/statitics/BookStatisticsTable';
import IndexContentContainer from '../IndexContentContainer';
import BookGoalCard from '../../book/goal/BookGoalCard';
import BookLastReadCard from '../../book/BookLastReadCard';
import Login from '../../../common/Login';
import ContentContainer from '../../../common/styles/ContentContainer';

const IndexSummaryCard = () => {
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<booksitoutIcon.user />} 
                    title={'내 독서활동 요약'} 
                    url='/book/mine?range=READING'
                />

                {isLoggedIn ? <YesLoggedInCase /> : <NoLoggedInCase />}
            </CardBodyContainer>
        </Card>
    )
}

const NoLoggedInCase = () => {
    return (
        <Login message={null} />
    )
}

const YesLoggedInCase = () => {
    return (
        <Row>
            <Col>
                <LeftRow>
                    <IndexContentContainer height={200}>
                        <BookLastReadCard />
                    </IndexContentContainer>

                    <ContentContainer href='/book/goal'>
                        <BookGoalCard />
                    </ContentContainer>
                </LeftRow>
            </Col>

            <Col>
                <ContentContainer href='/book/statistics'>
                    <BookStatisticsTable year={new Date().getFullYear()} />
                </ContentContainer>
            </Col>
        </Row>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
    margin-bottom: 20px;
`;

const LeftRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export default IndexSummaryCard