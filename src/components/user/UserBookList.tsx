import { useLoaderData, useParams, useSearchParams } from "react-router-dom"
import { PageType } from "../../types/PageType"
import SharingBookCard from "./SharingBookCard"
import { SharingBook } from "../../types/BookType"
import Page from "../common/Page"
import RouteTitle from "../common/RouteTitle"
import booksitoutIcon from '../common/icons/booksitoutIcon';
import { booksitoutServer } from "../../config/axios"
import { RouteButtonGroupType } from "../common/RouteButtonGroupType"
import RouteContainer from "../common/RouteContainer"

export async function loader({params, request}) {
    const nickName = params.nickName
    const page = request.url.includes('?') ? request.url.split('?')[1].split('=')[1] : 1

	return booksitoutServer
		.get(`/v4/book/sharing/paged?name=${nickName}&page=${page}&size=20`)
		.then((res) => res.data)
}

const UserBookList = () => {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get('page') ?? 1) ?? 1

    const pagedPost = useLoaderData() as PageType<SharingBook[]>
	const { nickName } = useParams()

	const buttons: RouteButtonGroupType[] = [
		{
			url: `/user/${nickName}`,
			key: 'user',
			label: '요약'
		},
		{
			url: `/user/${nickName}/books`,
			key: 'user-book',
			label: '공개한 책'
		}
	]
    
    return (
		<RouteContainer>
			<RouteTitle 
				icon={<booksitoutIcon.user />} 
				title={'유저 정보'} 
				subTitle={null} 
				currentKey={'user-book'} 
				buttons={buttons} 
				rightUi={null} 
			/>

			<div className="row">
				{pagedPost.content.map(book => {
					return (
						<div className="col-12 col-md-6 mb-4">
							<SharingBookCard book={book} />
						</div>
					)
				})}
			</div>

			<Page paged={pagedPost} currentPage={page} url={`/user/${nickName}/books`} />
		</RouteContainer>
	)
}

export default UserBookList