import React from 'react'
import TipsType from '../../../types/TipsType'
import NoContent from '../../common/NoContent'
import Error from '../../common/Error'
import InfiniteScroll from 'react-infinite-scroll-component'
import InfiniteScrollLoading from '../../common/InfiniteScrollLoading'
import { booksitoutServer } from '../../../config/axios'
import MainTipsListGroupLoading from './MainTipsListGroupLoading'
import TipsCard from './TipsCard'
import styled from 'styled-components';

const TipsListGroup = ({ range }) => {
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)

	const [currentPage, setCurrentPage] = React.useState(1)	
	const [totalPages, setTotalPages] = React.useState(0)	

	const [tips, setPostList] = React.useState<TipsType[]>([])
	React.useEffect(() => {
		getNextPage()
	}, [])

	const getNextPage = () => {
		booksitoutServer
			.get(`/v4/forum/tips?type=${range}&size=40&page=${currentPage}`)
			.then(res => {
				setTotalPages(res.data.totalPages)
				setPostList([...tips, ...res.data.content])
				setCurrentPage(currentPage + 1)
			})
			.catch(() => {
				setError(true)
			})
			.finally(() => setLoading(false))
	}

	if (loading) return <MainTipsListGroupLoading />
	if (tips == null || error) return <Error mt={100}/>
	if (tips.length === 0) return <NoContent message='아직 꿀팁이 없어요' move={0} mt={50} />

	return (
		<InfiniteScroll 
			loader={<InfiniteScrollLoading />} 
			next={getNextPage} 
			hasMore={currentPage < totalPages} 
			dataLength={totalPages} 
			className='overflow-hidden'
		>
			<Row>
				{
					tips.map((tip, _) => <TipsCard tip={tip} isAdmin={false} />)
				}
			</Row>
		</InfiniteScroll>
	)
}

const Row = styled.div.attrs({
	className: 'row'
})``;

export default TipsListGroup
