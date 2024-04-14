import styled from 'styled-components';
import { NavDropdown } from 'react-bootstrap'
import userIcon from './user.png'
import booksitoutIcon from '../../config/booksitoutIcon'
import useLoginStore from '../../routes/login/useLoginStore'

const TopnavUserIcon = () => {
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn())
	const handleLogout = useLoginStore((state) => state.logout)
	const iconSrc = localStorage.getItem('profile-image') == null || localStorage.getItem('profile-image') === '' ? userIcon : localStorage.getItem('profile-image') ?? ''

	return (
		<Container title={<Icon src={iconSrc} />}>
			{!isLoggedIn ? (
				<>
					<NavDropdown.Item href="https://docs.google.com/forms/d/1lW6HS7zUaxjD_0EAHE4TqnqHapG87yZqMkzLXqWcPLw" target='_blank' rel="noreferrer">
						<booksitoutIcon.faq className="text-book me-2 mb-1 bold" /> 제안 / 피드백
					</NavDropdown.Item>

					<NavDropdown.Divider />

					<NavDropdown.Item href="/login">
						<booksitoutIcon.login className="text-book me-2 mb-1" /> 로그인 + 회원가입
					</NavDropdown.Item>
				</>
			) : (
				<>
					<NavDropdown.Item href="https://docs.google.com/forms/d/1lW6HS7zUaxjD_0EAHE4TqnqHapG87yZqMkzLXqWcPLw" target='_blank' rel="noreferrer">
						<booksitoutIcon.suggestion className="text-book me-2 mb-1 bold" /> 제안 / 피드백
					</NavDropdown.Item>

					<NavDropdown.Divider />

					<NavDropdown.Item href="/user/redirect">
						<booksitoutIcon.user className="text-book me-2 mb-1" /> 내 프로필
					</NavDropdown.Item>

					<NavDropdown.Item href="/settings">
						<booksitoutIcon.settings className="text-book me-2 mb-1" /> 설정
					</NavDropdown.Item>

					<NavDropdown.Item onClick={handleLogout}>
						<booksitoutIcon.login className="text-book me-2 mb-1" /> 로그아웃
					</NavDropdown.Item>
				</>
			)}
		</Container>
	)
}

const Container = styled(NavDropdown).attrs({
	className: 'd-md-block',
	align: 'end',
})`
    padding: 0px;
    margin: 0px;
`;

const Icon = styled.img.attrs({
	className: 'img-fluid rounded',
	alt: ''
})`
    width: 20px;
    height: 20px;
    padding: 0px;
    margin: 0px;
`;

export default TopnavUserIcon