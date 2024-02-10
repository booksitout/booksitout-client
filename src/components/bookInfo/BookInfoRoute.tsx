import { useLoaderData } from 'react-router-dom'
import { BookType } from '../../types/BookType'
import BookInfoBasicInfoCard from './BookInfoBasicInfoCard'
import BookInfoStatisticsCard from './BookInfoStatisticsCard'
import BookInfoCoverCard from './BookInfoCoverCard'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon';
import {booksitoutServer} from "../../config/axios";

interface LoaderData {
	book: BookType
}

export async function loader({ params }) {
	const isbn = params.isbn

	const fetchBook = booksitoutServer.get(`/v4/book-isbn/${isbn}`).then((res) => res.data)
	const [book] = await Promise.all([fetchBook])

	return { book: book }
}

const BookInfoRoute = () => {
	const { book } = useLoaderData() as LoaderData

	return (
		<div className='container-xl'>
			<RouteTitle icon={<booksitoutIcon.book />} title={'책 정보'} subTitle={null} currentKey={undefined} buttons={[]} rightUi={undefined} />

			<BookInfoBasicInfoCard book={book} />
			<div className='mb-4' />

			<BookInfoStatisticsCard />
			<div className='mb-4' />

			<BookInfoCoverCard />
			<div className='mb-4' />
		</div>
	)
}

export default BookInfoRoute
