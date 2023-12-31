import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFire as FireIcon } from 'react-icons/bs'
import { PostType } from './PostType'
import PostListGroup from './PostListGroup'
import AddButton from '../../common/AddButton'
import Error from '../../common/Error';
import AllButton from '../../common/AllButton'
import { booksitoutServer } from '../../../config/axios'
import CardTitle from '../../common/CardTitle'
import PostListGroupLoading from './PostListGroupLoading'
import { useNavigate } from 'react-router-dom'

const PostPopular = () => {
	const navigate = useNavigate()

	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)

	const [popularPost, setPopularPost] = React.useState<PostType[]>([])
	React.useEffect(() => {
		booksitoutServer
			.get('/v4/forum/post?sort=popular&size=5')
			.then(res => setPopularPost(res.data.content))
			.catch(e => setError(true))
			.finally(() => setLoading(false))
	}, [])

	return (
		<Card className="h-100" style={{ minHeight: '480px' }}>
			<AddButton color="book" onClick={() => navigate('/add/post')} />

			<a href="/community/post/all/popular" className="text-decoration-none text-black">
				<Card.Body>
					<CardTitle icon={<FireIcon />} title={'지금 인기있는 게시글'} />

					{loading ? (
						<PostListGroupLoading col1="col-12 col-md-8 col-xl-6" col2="col-12 col-md-4 col-xl-6" />
					) : error ? (
							<Error move={-70} />
					) : (
						<PostListGroup
							postList={popularPost}
							col1="col-12 col-md-8 col-xl-6"
							col2="col-12 col-md-4 col-xl-6"
						/>
					)}

					<div className="pb-4" />

					<AllButton url="/community/post/all/popular" />
				</Card.Body>
			</a>
		</Card>
	)
}

export default PostPopular