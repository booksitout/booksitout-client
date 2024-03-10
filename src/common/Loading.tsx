import styled from 'styled-components';
import ColorConfig from "../config/ColorConfig"

const Loading = () => {
	return (
		<Container>
			<Spinner className='spinner-grow' role='status'/>
			<Text>잠시만 기다려 주세요</Text>
		</Container>
	)
}

const Container = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 250px;
    margin-bottom: 0px;
`;

const Spinner = styled.div`
    width: 100px;
    height: 100px;
    color: ${ColorConfig.Primary};
`;

const Text = styled.h1`
    margin-top: 20px;
`;

export default Loading
