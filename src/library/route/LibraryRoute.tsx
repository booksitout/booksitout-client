import React from 'react'
import { ImLibrary as LibraryIcon} from 'react-icons/im'
import LibraryNearCard from '../near/LibraryNearCard'
import LibrarySearchCard from '../LibrarySearchCard'
import LibraryRouteMembershipCard from '../membership/LibraryRouteMembershipCard'
import RouteTitle from '../../common/RouteTitle'
import LibraryRouteRegionCard from './LibraryRouteRegionCard'
import styled from 'styled-components';
import RouteContainer from '../../common/RouteContainer'

const LibraryRoute = () => {
	React.useEffect(() => {
		document.title = '도서관 | 책잇아웃'
	}, [])

    return (
		<RouteContainer>
			<RouteTitle icon={<LibraryIcon />} title={'도서관'} />

			<Row>
				<CardContainer>
					<LibrarySearchCard />
				</CardContainer>

				<CardContainer>
					<LibraryRouteRegionCard />
				</CardContainer>

				<CardContainer>
					<LibraryNearCard />
				</CardContainer>

				<CardContainer>
					<LibraryRouteMembershipCard />
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