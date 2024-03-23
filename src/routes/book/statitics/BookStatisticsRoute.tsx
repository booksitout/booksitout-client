import { useEffect } from 'react'
import styled from 'styled-components';
import RouteContainer from '../../../common/styles/RouteContainer'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import { Card } from 'react-bootstrap'
import CardBodyBackgroundContainer from '../../../common/styles/CardBodyBackgroundContainer'
import BookStatisticsByYearTable from './BookStatisticsByYearTable'
import RowSpacer from '../../../common/styles/RowSpacer'
import BookStatisticsReadTimeCard from './BookStatisticsReadTimeCard';

const BookStatisticsRoute = () => {
    useEffect(() => {
        document.title = '내 서재 | 책잇아웃'
    }, [])

    const buttons: RouteButtonGroupType[] = [
        {
            url: '/book',
            key: 'index',
            label: '둘러보기'
        },
        {
            url: '/book/mine',
            key: 'mine',
            label: '내 서재'
        },
        {
            url: '/book/statistics',
            key: 'statistics',
            label: '통계'
        },
    ]

    return (
        <RouteContainer>
            <RouteTitle
                icon={<booksitoutIcon.statistics />}
                title={'통계'}
                subTitle={'내 독서활동에 대한 통계를 확인할 수 있어요'}
                currentKey={'statistics'}
                buttons={buttons}
                rightUi={undefined}
            />

            <RowSpacer />
            <Row>
                <ColChart>
                    <Card>
                        <CardBodyBackgroundContainer>
                            <BookStatisticsReadTimeCard />
                        </CardBodyBackgroundContainer>
                    </Card>
                    <RowSpacer />
                </ColChart>

                <ColSummary>
                    <Card>
                        <CardBodyBackgroundContainer>
                            <BookStatisticsByYearTable />
                        </CardBodyBackgroundContainer>
                    </Card>
                    <RowSpacer />
                </ColSummary>
            </Row>

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

export default BookStatisticsRoute