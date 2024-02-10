import { useParams } from 'react-router-dom'
import booksitoutLogo from '../../../images/logo.png'
import TipsListGroup from './TipsListGroup'
import RouteContainer from '../../common/RouteContainer'
import RouteTitle from '../../common/RouteTitle'
import { RouteButtonGroupType } from '../../common/RouteButtonGroupType'

const TipsRoute = () => {
	document.title = '꿀팁 | 책잇아웃'

	const { range } = useParams()

	const buttons: RouteButtonGroupType[] = [
		{
			url: '/tips/all',
			key: 'all',
			label: '전체'
		},
		{
			url: '/tips/library',
			key: 'library',
			label: '도서관'
		},
		{
			url: '/tips/bookstore',
			key: 'bookstore',
			label: '책 구입'
		},
		{
			url: '/tips/booksitout',
			key: 'booksitout',
			label: '책잇아웃 사용법'
		},
		{
			url: '/tips/reading',
			key: 'reading',
			label: '독서법'
		},
		{
			url: '/tips/community',
			key: 'community',
			label: '커뮤니티'
		},
	]

	return (
		<RouteContainer>
			<RouteTitle 
				icon={<img src={booksitoutLogo} alt='' style={{ width: '35px', height: '35px' }} className='me-2' />} 
				title={'책잇아웃의 꿀팁'} 
				subTitle={'책에 관한 여러 꿀팁을 얻어 갈 수 있어요'} 
				currentKey={range} 
				buttons={buttons} 
				rightUi={undefined}
			/>

			<TipsListGroup range={range} />
		</RouteContainer>
	)
}

export default TipsRoute