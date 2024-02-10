import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface Props {
	type: string
}

const AddButtonGroup: React.FC<Props> = ({ type }) => {
	const navigate = useNavigate()

	return (
		<ButtonGroup className="w-100">
			<ToggleButton
				className="w-100 force-1-line"
				value={'BOOK'}
				type="radio"
				checked={false}
				onClick={() => navigate('/add/book/search')}
				variant={type?.toUpperCase() === 'BOOK' ? 'book' : 'light'}
			>
				책 추가
			</ToggleButton>

			<ToggleButton
				className="w-100 force-1-line"
				value={'MANUAL'}
				type="radio"
				checked={false}
				onClick={() => navigate('/add/membership/image')}
				variant={type?.toUpperCase() === 'MEMBERSHIP' ? 'book' : 'light'}
			>
				도서관 회원증
			</ToggleButton>
		</ButtonGroup>
	)
}

export default AddButtonGroup