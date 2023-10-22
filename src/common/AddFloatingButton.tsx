import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { MdAddCircle as BookIcon } from 'react-icons/md'
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import breakpoints from './breakpoints'

const AddFloatingButton = () => {
	const navigate = useNavigate()

	const token = useSelector((state: RootState) => state.user.token)

	const getNavigateUrl = () => {
		const path = window.location.pathname

		if (path === '/add/book/search') {
			return '/add/post'
		}

		if (path === '/add/post' || path === '/add/gathering') {
			return '/add/membership/image'
		}

		return '/add/book/search'
	}

	const getIsActive = () => {
		const path = window.location.pathname
		return path.startsWith('/book/add')
	}

	return (
		<>
			{token !== '' && token !== null && (
				<ButtonContainer variant="book" active={getIsActive()} onClick={() => navigate(getNavigateUrl())}>
					<BookIcon className="h2 p-0 m-0" />
				</ButtonContainer>
			)}
		</>
	)
}

const ButtonContainer = styled(Button).attrs({})`
	position: fixed;

	border-radius: 50px;
	z-index: 5;

	width: 60px;
	height: 60px;
	right: 20px;
	bottom: 20px;

	@media screen and (min-width: ${breakpoints.md}) {
		width: 60px;
		height: 60px;
		right: 30px;
		bottom: 30px;
	}

	@media screen and (min-width: ${breakpoints.xl}) {
		right: 60px;
		bottom: 60px;
	}
`

export default AddFloatingButton
