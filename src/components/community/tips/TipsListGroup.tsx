import React from 'react'
import { BiTime as TimeIcon } from 'react-icons/bi'
import TipsType from './TipsType'
import NoContent from '../../common/NoContent'
import Error from '../../common/Error'
import InfiniteScroll from 'react-infinite-scroll-component'
import InfiniteScrollLoading from '../../common/InfiniteScrollLoading'
import { booksitoutServer } from '../../../config/axios'
import MainTipsListGroupLoading from './MainTipsListGroupLoading'
import styled from 'styled-components';

const TipsListGroup = ({ range }) => {
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)

	const [currentPage, setCurrentPage] = React.useState(1)	
	const [totalPages, setTotalPages] = React.useState(0)	

	const [postList, setPostList] = React.useState<TipsType[]>([])
	React.useEffect(() => {
		getNextPage()
	}, [])

	const getNextPage = () => {
		booksitoutServer
			.get(`/v4/forum/tips?type=${range}&size=40&page=${currentPage}`)
			.then(res => {
				setTotalPages(res.data.totalPages)
				setPostList([...postList, ...res.data.content])
				setCurrentPage(currentPage + 1)
			})
			.catch(() => {
				setError(true)
			})
			.finally(() => setLoading(false))
	}

	if (loading) return <MainTipsListGroupLoading />
	if (postList == null || error) return <Error mt={100}/>
	if (postList.length === 0) return <NoContent message='아직 꿀팁이 없어요' move={0} mt={50} />

	return (
		<InfiniteScroll loader={<InfiniteScrollLoading />} next={getNextPage} hasMore={currentPage < totalPages} dataLength={totalPages} className='overflow-hidden'>
			<div className='row'>
				{postList.map((post, i) => {
					return (
						<a href={`/tips/detail/${post.id}`} className='mb-3'>
							<li className='d-flex w-100 pe-0 border p-3 rounded'>
								<div className='row w-100'>
									<div className='col-12 col-md-8'>
										<div className='text-book'>
											<TimeIcon className='mb-1' /> {post.type.displayName}
										</div>

										<Title>{post.title}</Title>
									</div>

									<div className='col-12 col-md-4'>
										<p className='text-secondary text-end mt-3'>{`${post.createdDate?.split('-')[0].slice(2) ?? '-'}년  ${
											post.createdDate?.split('-')[1] ?? '-'
										}월`}</p>
									</div>
								</div>
							</li>
						</a>
					)
				})}
			</div>
		</InfiniteScroll>
	)
}

const Title = styled.h5.attrs({
	className: 'clamp-1-line'
})`
	
`;

export default TipsListGroup
