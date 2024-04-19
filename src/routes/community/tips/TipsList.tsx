import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components';
import NoContent from '../../../common/NoContent';
import InfiniteScrollLoading from '../../../common/InfiniteScrollLoading';
import TipsCard from './TipsCard';
import TipsCardLoading from './TipsCardLoading';
import { useTipsList } from './useTipsList';

const TipsList = () => {
	const [isLoading, tipsList, paging] = useTipsList(12)

	if (isLoading) {
		return (
			<Row>
				{[1, 2, 3, 4, 5, 6].map((tip, _) => <TipsCardLoading />)}
			</Row>
		)
	}

	if (tipsList.length === 0) {
		return <NoContent message={'책잇아웃의 꿀팁이 없어요'} />
	}

	return (
		<InfiniteScroll
			loader={<InfiniteScrollLoading />}
			next={paging.fetchNext}
			hasMore={paging.hasMore}
			dataLength={paging.totalPages}
			className='overflow-hidden'
		>
			<Row>
				{tipsList.map((tip, _) => <TipsCard tip={tip} isAdmin={false} />)}
			</Row>
		</InfiniteScroll>
	)
}

const Row = styled.div.attrs({
	className: 'row'
})``;

export default TipsList
