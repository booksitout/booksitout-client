import { ButtonGroup, Container, ToggleButton } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import AddPostForm from "../community/post/AddPostForm"
import Preparing from "../common/Preparing"
import AddGatheringForm from "./gathering/AddGatheringForm"
import AddRouteButtonGroup from "../common/add/AddRouteButtonGroup"

const AddCommunityRoute = () => {
	const { type } = useParams()

	return (
		<Container>
			<AddRouteButtonGroup
				type={type || ''}
				ButtonGroup={<CommunityAddMethodButtonGroup type={type} />}
			/>

			{type === 'post' ? (
				<AddPostForm />
			) : type === 'gathering' ? (
				<AddGatheringForm />
			) : (
				<Preparing message="아직 준비 중이에요" />
			)}
		</Container>
	)
}

const CommunityAddMethodButtonGroup = ({ type }) => {
	const navigate = useNavigate()

	return (
		<ButtonGroup className="w-100">
			<ToggleButton
				className="w-100"
				value={'SEARCH'}
				type="radio"
				checked={false}
				variant={type === 'post' ? 'book' : 'light'}
				onClick={() => navigate('/add/post')}
			>
				게시글 추가
			</ToggleButton>

			<ToggleButton
				className="w-100"
				value={'MANUAL'}
				type="radio"
				checked={false}
				variant={type === 'gathering' ? 'book' : 'light'}
				onClick={() => navigate('/add/gathering')}
			>
				독서모임 추가
			</ToggleButton>
		</ButtonGroup>
	)
}

export default AddCommunityRoute