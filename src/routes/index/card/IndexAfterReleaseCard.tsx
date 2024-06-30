import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import breakpoints from '../../../config/Breakpoints';

const IndexAfterReleaseCard = () => {
    return (
        <Container>
            <Title>책잇아웃에 대한 생각을 들려 주세요</Title>

            <Content>
                사용하면서 불편했던 점이나 개선해야 할 부분을 알려주세요
            </Content>

            <a href="https://docs.google.com/forms/d/1lW6HS7zUaxjD_0EAHE4TqnqHapG87yZqMkzLXqWcPLw/viewform" target='_blank' rel="noreferrer">
                <InputButton>피드백 남기기</InputButton>
            </a>
        </Container>
    )
}

const Container = styled.div.attrs({
    className: 'rounded'
})`
    min-height: 200px;
    background-color: #d1e7de;

    padding: 30px;
    padding-top: 40px;

    text-align: center;
`;

const Title = styled.h1`
    font-size: 25px;
	font-weight: 700;
    `;

const Content = styled.p.attrs({
    className: 'text-secondary'
})`
    font-size: 20px;
`;

const InputButton = styled(Button).attrs({
    variant: 'book',
    type: 'email',
})`
    width: 300px;
    margin-left: 20px;

	@media screen and (max-width: ${breakpoints.sm}) {
        width: 100%;

        margin-left: 0px;
        margin-top: 20px;
    }
`;

export default IndexAfterReleaseCard