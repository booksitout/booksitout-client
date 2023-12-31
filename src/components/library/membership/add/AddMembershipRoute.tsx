import { useParams } from 'react-router-dom'
import MembershipAddMethodButtonGroup from './MembershipAddMethodButtonGroup'
import MembershipAddFormImage from './MembershipAddFormImage'
import MembershipAddFormManual from './manual/MembershipAddFormManual'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
import Error from '../../../common/Error'
import AddRouteButtonGroup from '../../../common/add/AddRouteButtonGroup'
import { Container } from 'react-bootstrap'

const AddMembershipRoute = () => {
	const isLogin = useSelector((state: RootState) => state.user.isLogin)

	const { method } = useParams()

	return (
		<Container>
			<AddRouteButtonGroup
				type={'membership'}
				ButtonGroup={<MembershipAddMethodButtonGroup method={method} />}
			/>

			{!isLogin ? (
				<Error message="도서관 회원증을 추가하시려면 로그인 해 주세요" move={0} />
			) : method === 'image' ? (
				<MembershipAddFormImage />
			) : method === 'manual' ? (
				<MembershipAddFormManual />
			) : (
				<></>
			)}
		</Container>
	)
}

export default AddMembershipRoute