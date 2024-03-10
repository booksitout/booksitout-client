import styled from 'styled-components';

const RowSpacer = styled.div`
    padding-top: ${props => props.size}px;
    padding-bottom: ${props => props.size}px;
`;

RowSpacer.defaultProps = {
	size: 20
}  

export default RowSpacer