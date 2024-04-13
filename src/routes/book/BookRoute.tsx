import { useEffect } from 'react'
import RouteContainer from '../../common/styles/RouteContainer'
import { Card } from 'react-bootstrap'
import RowSpacer from '../../common/styles/RowSpacer'
import CardTitle from '../../common/styles/CardTitle'
import booksitoutIcon from '../../config/booksitoutIcon';
import RouteTitle from '../../common/RouteTitle/RouteTitle'
import CardBodyBackgroundContainer from '../../common/styles/CardBodyBackgroundContainer'
import RouteTitleConfig from '../../config/RouteTitleConfig'

const BookRoute = () => {
    useEffect(() => {
        document.title = '서재 | 책잇아웃'
    }, [])

    return (
        <RouteContainer>
            <RouteTitle 
				icon={<booksitoutIcon.book />} 
				title={'서재 둘러보기'} 
				subTitle={'나만의 서재를 만들어 가고 다른 사람의 서재를 구경해 보세요'} 
				currentKey={'index'} 
				buttons={RouteTitleConfig.Book} 
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

            {/* <RowSpacer />
            <Card>
                <CardBodyBackgroundContainer height={600}>
                    <CardTitle 
                        icon={<booksitoutIcon.book />} 
                        title={'인생책 추천받기'} 
                        subTitle={'다른 사람의 인생 책들을  둘러볼 수 있어요'}
                        url={'/book/recommendation'} 
                    />
                </CardBodyBackgroundContainer>
            </Card> */}
            <RowSpacer />
        </RouteContainer>
    )
}

export default BookRoute