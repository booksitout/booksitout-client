import { useEffect } from 'react'
import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import { Card } from 'react-bootstrap'
import CardBodyContentContainer from '../../../common/styles/CardBodyContentContainer'
import BookStatisticsByYearTable from './BookStatisticsByYearTable'
import RowSpacer from '../../../common/styles/RowSpacer'
import BookStatisticsReadTimeCard from './BookStatisticsReadTimeCard';
import RouteTitleConfig from '../../../config/RouteTitleConfig';
import useLoginStore from '../../login/useLoginStore';
import Login from '../../../common/Login';

const BookStatisticsRoute = () => {
    useEffect(() => {
        document.title = '내 서재 | 책잇아웃'
    }, [])

    const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.statistics />}
                title={'통계'}
                subTitle={'내 독서활동에 대한 통계를 확인할 수 있어요'}
                currentKey={'statistics'}
                buttons={RouteTitleConfig.Book}
                rightUi={undefined}
            />

            {isLoggedIn ? <YesLoggedInCase /> : <NoLoggedInCase />}
            <RowSpacer />
        </RouteContainer>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const ColChart = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-8'
})`
`;

const ColSummary = styled.div.attrs({
    className: 'col-12 col-md-6 col-xl-4'
})`
`;

const YesLoggedInCase = () => {
    return (
        <>
            <RowSpacer />
            <Row>
                <ColChart>
                    <Card>
                        <CardBodyContentContainer>
                            <BookStatisticsReadTimeCard />
                        </CardBodyContentContainer>
                    </Card>
                    <RowSpacer />
                </ColChart>

                <ColSummary>
                    <Card>
                        <CardBodyContentContainer>
                            <BookStatisticsByYearTable />
                        </CardBodyContentContainer>
                    </Card>
                    <RowSpacer />
                </ColSummary>
            </Row>
        </>
    )
}

const NoLoggedInCase = () => {
    return (
        <>
            <RowSpacer size={40} />
            <Login message={'로그인해 내 독서활동 통계 보기'} />
        </>
    )
}

export default BookStatisticsRoute