import styled from 'styled-components';
import ColorConfig from "../config/ColorConfig"

interface Props {
    size: number
    message: string
}

const Loading: React.FC<Props> = ({ size = 100, message = '잠시만 기다려 주세요' }) => {
	return (
		<Container>
            <ContentContainer>
                <SpinnerContainer>
                    <Spinner className='spinner-grow' role='status' size={size} />
                </SpinnerContainer>
                
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

const SpinnerContainer = styled.div`
    text-align: center;
`;

const Spinner = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    color: ${ColorConfig.Primary};
`;

const Text = styled.h5.attrs({
    className: 'force-1-line'
})`
	margin-top: 0.5em;
    text-align: center;
`;

export default Loading
