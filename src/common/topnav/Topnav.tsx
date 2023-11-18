import React from 'react'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Card } from 'react-bootstrap'
import user from '../../user/user'
import messages from '../../settings/messages'
import uiSettings from '../../settings/ui'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsLogin, logoutToken } from '../../redux/userSlice'
import { RootState } from '../../redux/store'
import TopnavSmallSearchBar from './TopnavSmallSearchBar'
import TopnavBigDropdown from './TopnavBigDropdown'
import TopnavLogo from './TopnavLogo'
import TopnavSmallDropdown from './TopnavSmallDropdown'
import booksitoutIcon from '../icons/booksitoutIcon';
import styled from 'styled-components';

import '../../resources/css/button.css'
import '../../resources/css/topnav.css'
import './topnav.scss'
import breakpoints from '../breakpoints'

const Topnav = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useDispatch()
	
	const isLogin = useSelector((state: RootState) => state.user.isLogin)
	const expand = uiSettings.topnav.collapse

	const [expanded, setExpanded] = React.useState<boolean>(false)
	const [showSearchBar, setShowSearchBar] = React.useState<boolean>(false)
	const [autoFocus, setAutoFocus] = React.useState<boolean>(false)
	const [initialLoad, setInitialLoad] = React.useState<boolean>(true)

	const handleLogout = (e) => {
		e.preventDefault()

		if (!user.localStorage.get.logoutPossible()) {
			toast.error(messages.user.logout.fail.readingInProgress)
			return
		}

		localStorage.clear()
		localStorage.removeItem('login-token')
		dispatch(logoutToken())
		setExpanded(false)
		dispatch(checkIsLogin())
		toast.success(messages.user.logout.success)
		navigate('/')
	}

	React.useEffect(() => {
		setExpanded(false)
		setShowSearchBar(false)
		setAutoFocus(false)
	}, [location.pathname])

	React.useEffect(() => {
		if (expanded) {
			setShowSearchBar(false)
			setAutoFocus(false)
		}
	}, [expanded])

	const toggleSearchBar = () => {
		setShowSearchBar(!showSearchBar)
		setAutoFocus(!showSearchBar)
		setExpanded(false)
		setInitialLoad(false)
	}

	const handleSearchClick = () => {
		// if (isLogin) {
			toggleSearchBar()
			// return
		// }

		// toast.error('검색을 이용하기 위해 로그인 해 주세요')
	}

	const toggleNavbar = () => {
		setExpanded(!expanded)
	}

	return (
		<>
			<TopnavSmallSearchBarContainer
				show={showSearchBar}
				className={`${initialLoad ? '' : showSearchBar ? 'search-bar-up' : 'search-bar-down'}`}
			>
				<Card.Body>
					<TopnavSmallSearchBar autoFocus={autoFocus} isLogin={isLogin} />
				</Card.Body>
			</TopnavSmallSearchBarContainer>

			<Navbar
				key={expand}
				expand={expand}
				expanded={expanded}
				fixed="top"
				bg="light"
				collapseOnSelect
				className="m-0 pt-1 pt-md-0 pb-1"
			>
				<Container fluid style={{ zIndex: '1000' }}>
					<TopnavLogo />

					<button className="d-lg-none ms-auto me-3 navbar-toggler mt-1" style={{ height: '35px', paddingTop: '2.5px' }}>
						<booksitoutIcon.topnavSearch
							className={`h2 m-0 button-hover ${showSearchBar ? 'text-black' : 'text-secondary'}`}
							onClick={handleSearchClick}
						/>
					</button>

					<Navbar.Toggle onClick={toggleNavbar} style={{ height: '35px', paddingTop: '2.5px' }} className='mt-1' />

					<Navbar.Collapse id="responsive-navbar-nav">
						<TopnavSmallDropdown isLogin={isLogin} handleLogout={handleLogout} />

						<button className="ms-auto me-3 navbar-toggler mt-1" style={{ height: '35px', paddingTop: '2.5px' }}>
							<booksitoutIcon.topnavSearch
								className={`h2 m-0 button-hover ${showSearchBar ? 'text-black' : 'text-secondary'}`}
								onClick={handleSearchClick}
							/>
						</button>

						<span className="d-none d-lg-inline">
							<TopnavSmallSearchBar isLogin={isLogin} autoFocus={autoFocus} />
						</span>

						<Nav className="ms-auto">
							<TopnavBigDropdown isLogin={isLogin} handleLogout={handleLogout} />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

const TopnavSmallSearchBarContainer = styled(Card).attrs({
	className: 'd-inline d-lg-none',
})`
	position: fixed;
	top: ${props => props.show ? '70px' : '-85px'};
	z-index: 900;
	padding: 0px;

	width: 500px;
	height: 50px;
	right: 8px;
	
	@media screen and (max-width: ${breakpoints.sm}) {
		width: 90%;
		height: 75px;

		left: 5%;
		right: 0%;
	}
`

export default Topnav
