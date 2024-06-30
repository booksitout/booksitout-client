import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardBodyContentContainer = styled(Card.Body)`
    gap: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    min-height: ${props => props.height}px;
`;

CardBodyContentContainer.defaultProps = {
    height: 0
}

export default CardBodyContentContainer