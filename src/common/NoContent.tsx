import styled from 'styled-components';
import { VscError as XMarkIcon } from 'react-icons/vsc'

interface Props {
	message: string
}

const NoContent: React.FC<Props> = ({ message = '텅 비어 있어요' }) => {
	return (
		<Container>
			<ContentContainer>
				<IconContainer>
					<XMarkIcon className='text-book' size={`5em`} style={{ textAlign: 'center' }} />
				</IconContainer>

				<Text>{message}</Text>
			</ContentContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ContentContainer = styled.div`
	justify-content: center;
`;

const IconContainer = styled.div`
	text-align: center;
`;

const Text = styled.h5.attrs({
	className: 'force-1-line'
})`
	margin-top: 0.5em;
	text-align: center;
`;

export default NoContent
