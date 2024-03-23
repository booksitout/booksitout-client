import React, { useEffect } from 'react'
import RouteContainer from '../../common/styles/RouteContainer'
import { Card } from 'react-bootstrap'
import RowSpacer from '../../common/styles/RowSpacer'
import CardTitle from '../../common/styles/CardTitle'
import booksitoutIcon from '../../config/booksitoutIcon';
import RouteTitle from '../../common/RouteTitle/RouteTitle'
import { RouteButtonGroupType } from '../../common/RouteTitle/RouteButtonGroupType'
import CardBodyBackgroundContainer from '../../common/styles/CardBodyBackgroundContainer'

const BookRoute = () => {
    useEffect(() => {
        document.title = '서재 | 책잇아웃'
    }, [])

    const buttons: RouteButtonGroupType[] = [
        {
            url: '/book',
			key: 'index',
			label: '둘러보기'
        },
        {
            url: '/book/',
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
				icon={<booksitoutIcon.book />} 
				title={'서재'} 
				subTitle={'나만의 서재를 만들어 가고 다른 사람의 서재를 구경해 보세요'} 
				currentKey={'index'} 
				buttons={buttons} 
				rightUi={undefined} 
			/>

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.book />} 
                        title={'서재 구경하기'} 
                        subTitle={'다른 사람의 서재를 구경할 수 있어요'}
                        url={'/book/users'} 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.statistics />} 
                        title={'내 독서활동 통계'} 
                        subTitle={'열심히 기록한 내 독서활동을 통계로 확인하세요'}
                        url={'/book/statistics'} 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.book />} 
                        title={'관심 있는 책'} 
                        subTitle={''}
                        url={'/book'} 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.book />} 
                        title={'읽고 있는 책'} 
                        url={'/book'} 
                    />
                </CardBodyBackgroundContainer>
            </Card>

            <RowSpacer />
        </RouteContainer>
    )
}

export default BookRoute