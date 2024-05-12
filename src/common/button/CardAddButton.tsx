import { AiFillPlusCircle as AddIcon } from 'react-icons/ai'
import styled from 'styled-components';

interface Props {
    size?: number
    offset?: number
    onClick: () => void
}

const CardAddButton: React.FC<Props> = ({ size = 35, offset = 15, onClick }) => {
    const AddButtonContainer = styled.div`
		padding: 0px;

		position: absolute;
		top: ${offset}px;
		right: ${offset}px;

		z-index: 10;

        &:hover {
            opacity: 0.7;
        }
	`

    const addButtonStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50px',
    }

    return (
        <AddButtonContainer>
            <AddIcon
                id="addButton"
                className="text-book clickable"
                style={addButtonStyle}
                onClick={onClick}
            />
        </AddButtonContainer>
    )
}

export default CardAddButton