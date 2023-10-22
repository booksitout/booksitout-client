import React from 'react'
import { ToggleButton, ButtonGroup, Card, Container } from 'react-bootstrap'
import AddBookManualForm from './AddBookManualForm'
import AddBookSearchForm from './AddBookSearchForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Error from '../../common/Error';

const AddBookRoute = () => {
	const navigate = useNavigate()
	const { method } = useParams()

	const isLogin = useSelector((root: RootState) => root.user.isLogin)

	return (
		<>
			<Container>
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
			</Container>

			{!isLogin ? (
				<Error message="책을 추가하시려면 로그인 해 주세요" move={0} mt={25}/>
			) : method?.toUpperCase() === 'SEARCH' ? (
				<AddBookSearchForm />
			) : (
				<AddBookManualForm />
			)}
		</>
	)
}

export default AddBookRoute
