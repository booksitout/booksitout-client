import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap'
import booksitoutIcon from '../../config/booksitoutIcon';

interface Props {
    state: 'ADD' | 'DELETE'
    onAdd: (...args: any[]) => void;
    onDelete: (...args: any[]) => void;
}

const AddDeleteButton: React.FC<Props> = ({ state, onAdd, onDelete }) => {
    if (state === 'ADD') {
        return (
            <ButtonContainer onClick={onAdd} variant="book">
                <AddButton />
            </ButtonContainer>
        )
    } else {
        return (
            <ButtonContainer onClick={onDelete} variant="danger">
                <DeleteButton />
            </ButtonContainer>
        )
    }
}

const ButtonContainer = styled(BootstrapButton)`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    padding: 0px;
`;

const AddButton = styled(booksitoutIcon.add)`
    padding: 0px;

    position: relative;
    bottom: 2.5px;
    left: 0.25px;
`;

const DeleteButton = styled(booksitoutIcon.delete)`
    padding: 0px;

    position: relative;
    bottom: 2.5px;
    left: 0.25px;
`;

export default AddDeleteButton