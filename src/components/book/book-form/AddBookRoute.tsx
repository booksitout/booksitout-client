import { ToggleButton, ButtonGroup, Container } from 'react-bootstrap'
import AddBookManualForm from './AddBookManualForm'
import AddBookSearchForm from './AddBookSearchForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import Error from '../../common/Error';
import AddRouteButtonGroup from '../../common/add/AddRouteButtonGroup'

const AddBookRoute = () => {
	const isLogin = useSelector((root: RootState) => root.user.isLogin)

	const { method } = useParams()

	return (
		<Container>
			<AddRouteButtonGroup 
				type={'book'} 
				ButtonGroup={<BookAddMethodButtonGroup method={method} />} 
			/>

			{!isLogin ? (
				<Error message="책을 추가하시려면 로그인 해 주세요" move={0} mt={25} />
			) : method?.toUpperCase() === 'SEARCH' ? (
				<AddBookSearchForm />
			) : (
				<AddBookManualForm />
			)}
		</Container>
	)
}

const BookAddMethodButtonGroup = ({ method }) => {
	const navigate = useNavigate()

	return (
		<ButtonGroup className="w-100">
			<ToggleButton
				className="w-100"
				value={'SEARCH'}
				type="radio"
				checked={false}
				onClick={() => navigate('/add/book/search')}
				variant={method?.toUpperCase() === 'SEARCH' ? 'book' : 'light'}
			>
				검색으로 추가하기
			</ToggleButton>

			<ToggleButton
				className="w-100"
				value={'MANUAL'}
				type="radio"
				checked={false}
				onClick={() => navigate('/add/book/manual')}
				variant={method?.toUpperCase() === 'MANUAL' ? 'book' : 'light'}
			>
				직접 추가하기
			</ToggleButton>
		</ButtonGroup>
	)
}

export default AddBookRoute
