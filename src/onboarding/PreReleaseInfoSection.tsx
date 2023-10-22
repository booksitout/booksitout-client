import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import breakpoints from '../common/breakpoints';

const PreReleaseInfoSection = () => {
    return (
        <BootstrapContainer>
            <Container>
                <Title>책잇아웃은 아직 정식 출시전이에요</Title>

                <Content>
                    2024년 1월에 출시 예정이니 잠시만 기다려 주세요!
                </Content>

                <a href="https://docs.google.com/forms/d/1Lzt2Uf_jlajP2wN0isL7TPSAOuadbOgpNQfBLy_IRbc/viewform" target='_blank' rel="noreferrer">
                    <InputButton>출시되면 알림 받기</InputButton>
                </a>
            </Container>
        </BootstrapContainer>
    )
}

const BootstrapContainer = styled.div.attrs({
    className: 'container'
})``;   

const Container = styled.div.attrs({
    className: 'rounded'
})`
    min-height: 200px;
    background-color: #d1e7de;

    padding: 30px;

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

export default PreReleaseInfoSection