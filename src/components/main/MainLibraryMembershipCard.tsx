import React from 'react'
import { Card } from 'react-bootstrap'
import CardTitle from '../common/CardTitle'
import { BsFillPersonVcardFill as CardIcon} from 'react-icons/bs'
import AddButton from '../common/AddButton'
import { useNavigate } from 'react-router-dom'
import { booksitoutServer } from '../../config/axios'
import { PageType } from '../../types/PageType'
import { MembershipType } from '../library/membership/MembershipType'
import MembershipCard from '../library/membership/MembershipCard'
import Error from '../common/Error';
import MembershipCardLoading from '../library/membership/MembershipCardLoading'
import NoContent from '../common/NoContent'


const MainLibraryMembershipCard = () => {
	const navigate = useNavigate()
    const [loading, setLoading] = React.useState<boolean>(true)

	const [membershipList, setMembershipList] = React.useState<PageType<MembershipType[]> | undefined>(undefined)
	React.useEffect(() => {
		booksitoutServer
			.get('v5/library/membership?size=2')
			.then(res => setMembershipList(res.data))
			.catch(() => setMembershipList(undefined))
			.finally(() => setLoading(false))
	}, [])

	return (
		<Card className="h-100" style={{ minHeight: '420px', maxHeight: '420px' }}>
			<AddButton onClick={() => navigate('/add/membership/image')} />

			<Card.Body className="h-100">
				<a href="/library/membership/all" className="text-black h-100">
					<CardTitle icon={<CardIcon />} title="도서관 회원증" subTitle={undefined} iconSize={1} mb={0} />

					{loading ? (
						Array.from({ length: 2 }).map(() => {
							return (
								<div className="col-12 mb-3">
									<MembershipCardLoading height={37.5} />
								</div>
							)
						})
					) : membershipList === undefined ? (
						<Error />
					) : membershipList.content.length === 0 ? (
						<NoContent message="추가된 회원증이 없어요" move={30}/>
					) : (
						membershipList.content.map(membership => {
							return (
								<div className="col-12 mb-3">
									<MembershipCard membership={membership} height={37.5} />
								</div>
							)
						})
					)}
				</a>
			</Card.Body>
		</Card>
	)
}

export default MainLibraryMembershipCard