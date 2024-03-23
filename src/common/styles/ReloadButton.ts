import styled from 'styled-components';
import { IoReloadCircle as ReloadIcon } from 'react-icons/io5'

const ReloadButton = styled(ReloadIcon).attrs({
    className: "text-book clickable"
})`
    position: absolute;
    right: 2.5%;
    top: ${props => props.top}px;
    z-index: 20;
    font-size: 40px;
`;

ReloadButton.defaultProps = {
    top: 20
}

export default ReloadButton