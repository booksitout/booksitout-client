import styled from 'styled-components';
import breakpoints from './breakpoints';

const RouteContainer = styled.div.attrs({
	className: 'container-fluid',
})`
	overflow-x: hidden;
	overflow-y: hidden;

	@media screen and (min-width: ${breakpoints.md}) {
		padding-left: 5%;
		padding-right: 5%;
	}

	@media screen and (min-width: ${breakpoints.xxxl}) {
		padding-left: 10%;
		padding-right: 10%;
	}

	@media screen and (min-width: ${breakpoints.xxxxl}) {
		padding-left: 15%;
		padding-right: 15%;
	}
`

RouteContainer.defaultProps = {
	width: breakpoints.xxxl
}

export default RouteContainer