import styled from 'styled-components'
import ColorConfig from '../../config/ColorConfig'

const ContentContainer = styled.a.attrs({
	className: 'clickable',
})`
	display: flex;
	flex-direction: row;

	position: relative;

	gap: 20px;
	padding: 20px;
	border-radius: 5px;
	background-color: white;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	height: ${props => props.height}px;

	&:hover {
		color: ${props => (props.isNotHover ? 'black' : ColorConfig.Primary)};
	}
`

export default ContentContainer
