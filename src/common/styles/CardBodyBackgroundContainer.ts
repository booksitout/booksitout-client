import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardBodyBackgroundContainer = styled(Card.Body)`
    gap: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    min-height: ${props => props.height}px;
`;

CardBodyBackgroundContainer.defaultProps = {
    height: 0
}

export default CardBodyBackgroundContainer