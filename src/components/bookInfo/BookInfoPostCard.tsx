import NoContent from "../common/NoContent"
import PostListGroup from "../community/post/PostListGroup"
import BookInfoCard from "./BookInfoCard"
import booksitoutIcon from '../common/icons/booksitoutIcon';

const BookInfoRelatedPost = ({postList}) => {
	return (
		<BookInfoCard
			title='관련 게시글'
			content={
				postList.length === 0 ? (
					<NoContent message='게시글이 없어요' move={-150} />
				) : (
					<div className='mt-0'>{<PostListGroup postList={postList} />}</div>
				)
			}
			icon={<booksitoutIcon.post />}
		/>
	)
}

export default BookInfoRelatedPost