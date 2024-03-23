import booksitoutLogo from '../../../images/logo.png'
import { RouteButtonGroupType } from '../../../common/RouteTitle/RouteButtonGroupType'
import { useEffect } from 'react'
import useUrlQuery from '../../../common/hooks/useUrlQuery'
import RouteContainer from '../../../common/styles/RouteContainer'
import RouteTitle from '../../../common/RouteTitle/RouteTitle'
import TipsList from './TipsList'
import RowSpacer from '../../../common/styles/RowSpacer'

const TipsRoute = () => {
    const range = useUrlQuery('range')

    useEffect(() => {
        document.title = '꿀팁 | 책잇아웃'
    }, [])

	const buttons: RouteButtonGroupType[] = [
        {
            url: '/community/tips?range=all',
			key: 'tips',
			label: '책잇아웃의 꿀팁'
        },
        {
            url: '/community/popular-book',
            key: 'popular',
            label: '인기 책'
        },
	]

	return (
		<RouteContainer>
            <RouteTitle 
				icon={<img src={booksitoutLogo} alt='' style={{ width: '35px', height: '35px' }} />} 
				title={'책잇아웃의 꿀팁'} 
				subTitle={'책에 관한 여러 꿀팁을 얻어 갈 수 있어요'} 
				currentKey={'tips'} 
				buttons={buttons} 
				rightUi={undefined}
			/>

			<RowSpacer />
			<TipsList />
		</RouteContainer>
	)
}

export default TipsRoute