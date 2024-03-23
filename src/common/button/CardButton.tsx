import { AiFillPlusCircle as AddIcon } from 'react-icons/ai'
import '../../resources/css/button.css'
import styled from 'styled-components';

const AddButton = ({ onClick = () => {}, right = '15px', top = '15px', url = '' }) => {
	const AddButtonContainer = styled.div`
		padding: 0px;

		position: absolute;
		top: ${top};
		right: ${right};

		z-index: 4;
	`

	const addButtonStyle = {
		width: `35px`,
		height: `35px`,
		borderRadius: '50px',
	}

	return (
		<AddButtonContainer>
			{url !== '' ? (
				<a href={url}>
					<AddIcon
						id="addButton"
						className={`text-book clickable`}
						style={addButtonStyle}
						onClick={() => onClick()}
					/>
				</a>
			) : (
				<AddIcon
					id="addButton"
					className={`text-book clickable`}
					style={addButtonStyle}
					onClick={() => onClick()}
				/>
			)}
		</AddButtonContainer>
	)
}

export default AddButton