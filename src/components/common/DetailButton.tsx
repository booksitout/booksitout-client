import React from 'react'
import { HiDotsCircleHorizontal as MoreIcon } from "react-icons/hi";
import styled from 'styled-components';

const DetailButton = ({ size = 35, color = 'book', onClick = () => {}, right = '15px', top = '15px', url = '' }) => {
	const AddButtonContainer = styled.div`
		padding: 0px;

		position: absolute;
		top: ${top};
		right: ${right};

		z-index: 4;
	`

	const addButtonStyle = {
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: '50px',
	}

	return (
		<AddButtonContainer>
			{url !== '' ? (
				<a href={url}>
					<MoreIcon
						id="addButton"
						className={`text-${color} clickable`}
						style={addButtonStyle}
						onClick={() => onClick()}
					/>
				</a>
			) : (
				<MoreIcon
                    id="addButton"
					className={`text-${color} clickable`}
					style={addButtonStyle}
					onClick={() => onClick()}
				/>
			)}
		</AddButtonContainer>
	)
}

export default DetailButton