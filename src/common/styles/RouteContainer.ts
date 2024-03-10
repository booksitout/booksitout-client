import styled from 'styled-components';
import breakpoints from '../../config/breakpoints';

const RouteContainer = styled.div.attrs({
	className: 'container-fluid',
})`
	justify-content: center;

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

	@media screen and (min-width: ${breakpoints.xxxxxl}) {
		padding-left: 20%;
		padding-right: 20%;
	}

	@media screen and (min-width: ${breakpoints.ultraWide}) {
		padding-left: 25%;
		padding-right: 25%;
	}
`

RouteContainer.defaultProps = {
	width: breakpoints.xxxl
}

export default RouteContainer