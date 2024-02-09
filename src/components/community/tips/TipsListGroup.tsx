import React from 'react'
import { BiTime as TimeIcon } from 'react-icons/bi'
import TipsType from '../../../types/TipsType'
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
						<a href={`/tips/detail/${post.id}`} className='mb-3 col-12 col-md-6 col-lg-4'>
							<List>
								<ImageContainer>
									<Image src={post.displayImageUrl} alt='' />
								</ImageContainer>

								<div className='text-book mt-3'>
									<TimeIcon className='mb-1' /> {post.type.displayName}
								</div>

								<Title>{post.title}</Title>
							</List>
						</a>
					)
				})}
			</div>
		</InfiniteScroll>
	)
}

const Title = styled.h5.attrs({
	className: 'clamp-1-line'
})``;

const List = styled.li.attrs({
	className: 'border p-3 rounded'
})`
	display: flex;
	flex-direction: column;
	padding-right: 0px;
`;

const Image = styled.img.attrs({
	className: 'img-fluid rounded'
})`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
`;

const ImageContainer = styled.div`
	width: 100%; 
	height: 0; 
	padding-top: 56.25%; 
	position: relative; 
`;

export default TipsListGroup
