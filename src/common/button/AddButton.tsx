import { Button } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
    label: string,
    onClick: () => void
}

const AddButton: React.FC<Props> = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    )
}

const ButtonContainer = styled(Button).attrs({
    className: '',
    variant: 'book',
})`
    width: 100%;
`;

export default AddButton