import styled from 'styled-components';

const ColSpacer = styled.div`
    padding-left: ${props => props.size}px;
    padding-right: ${props => props.size}px;
`;

ColSpacer.defaultProps = {
	size: 20
}  

export default ColSpacer