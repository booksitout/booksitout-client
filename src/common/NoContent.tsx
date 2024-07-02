import React from "react";
import styled from 'styled-components';
import { VscError as XMarkIcon } from 'react-icons/vsc'

interface Props {
	message: string
}

const NoContent: React.FC<Props> = ({ message = '3km 내에 도서관이 없어요' }) => {
	return (
		<Container>
			<ContentContainer>
				<IconContainer>
					<XMarkIcon className="text-book" size="5em" />
				</IconContainer>
				<Text>{message}</Text>
			</ContentContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
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
