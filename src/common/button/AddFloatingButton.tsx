import { useNavigate } from 'react-router-dom'
import { MdAddCircle as BookIcon } from 'react-icons/md'
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import breakpoints from '../../config/breakpoints'
import useLoginStore from '../../routes/login/useLoginStore';

const AddFloatingButton = () => {
	const navigate = useNavigate()

	const token = useLoginStore((state) => state.isLoggedIn())
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn())

	const getNavigateUrl = () => {
		const path = window.location.pathname

		const URL_MEMBERSHIP =  '/add/membership/image'
		const URL_BOOK = '/add/book/search'

		if (path.startsWith('/library/membership')) {
			return URL_MEMBERSHIP
		}

		if (path === '/add/book/search') {
			return URL_MEMBERSHIP
		}

		return URL_BOOK
	}

	const getIsActive = () => {
		const path = window.location.pathname
		return path.startsWith('/book/add')
	}

	return (
		<>
			{isLoggedIn && token !== '' && token !== null && (
				<ButtonContainer active={getIsActive()} onClick={() => navigate(getNavigateUrl())}>
					<BookIcon className="h2 p-0 m-0" />
				</ButtonContainer>
			)}
		</>
	)
}

const ButtonContainer = styled(Button).attrs({
	variant: "book"
})`
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
