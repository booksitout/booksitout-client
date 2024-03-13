import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import ColorConfig from '../../config/ColorConfig';

const CardBodyContainer = styled(Card.Body)`
    min-height: ${props => props.height}px;
    border: 2px solid ${ColorConfig.Primary};
    border-radius: 10px;
`;

CardBodyContainer.defaultProps = {
    height: 600
}

export default CardBodyContainer