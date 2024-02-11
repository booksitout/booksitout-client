import React from 'react'
import LibraryNearCard from '../near/LibraryNearCard'
import LibrarySearchCard from '../LibrarySearchCard'
import LibraryRouteMembershipCard from '../membership/LibraryRouteMembershipCard'
import RouteTitle from '../../common/RouteTitle'
import LibraryRouteRegionCard from './LibraryRouteRegionCard'
import styled from 'styled-components';
import RouteContainer from '../../common/RouteContainer'
import { LibraryIcon, libraryRouteButtons } from './libraryRouteConfig'

const LibraryRoute = () => {
	React.useEffect(() => {
		document.title = '도서관 | 책잇아웃'
	}, [])

    return (
		<RouteContainer>
			<RouteTitle 
				icon={<LibraryIcon />} 
				title={'도서관'} 
				subTitle={'도서관을 찾고 이용할 떄 필요한 모든 것, 편하게 누리세요'} 
				currentKey={'library'} 
				buttons={libraryRouteButtons} 
				rightUi={undefined} 
			/>

			<Row>
				<CardContainer>
					<LibraryRouteMembershipCard />
				</CardContainer>

				<CardContainer>
					<LibraryNearCard />
				</CardContainer>

				<CardContainer>
					<LibrarySearchCard />
				</CardContainer>

				<CardContainer>
					<LibraryRouteRegionCard />
				</CardContainer>
			</Row>
		</RouteContainer>
	)
}

const Row = styled.div.attrs({
	className: 'row row-eq-height',
})``

const CardContainer = styled.div.attrs({
	className: 'col-12 col-xl-6 mb-4',
})``

export default LibraryRoute