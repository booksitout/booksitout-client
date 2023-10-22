import styled from 'styled-components';

const RouteContainer = styled.div.attrs({
	className: 'container-fluid',
})`
	max-width: ${props => props.width};
	overflow-x: hidden;
	overflow-y: hidden;
`

RouteContainer.defaultProps = {
	width: '1920px'
}

export default RouteContainer