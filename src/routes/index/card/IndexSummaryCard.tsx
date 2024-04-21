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

const IndexSummaryCard = () => {
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<booksitoutIcon.user />} 
                    title={'내 독서활동 요약'} 
                    url='/book/summary'
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
                <IndexContentContainer height={175}>
                    <BookLastReadCard />
                </IndexContentContainer>

                <IndexContentContainer href='/book/goal'>
                    <BookGoalCard />
                </IndexContentContainer>
            </Col>

            <Col>
                <IndexContentContainer href='/book/statistics'>
                    <BookStatisticsTable year={new Date().getFullYear()} />
                </IndexContentContainer>
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
`;

export default IndexSummaryCard