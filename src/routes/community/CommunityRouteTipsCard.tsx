import React from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser'
import { Card } from 'react-bootstrap'
import CardBodyBackgroundContainer from '../../common/styles/CardBodyBackgroundContainer'
import logo from '../../images/logo.png'
import CardTitle from '../../common/styles/CardTitle'
import breakpoints from '../../config/breakpoints';
import IndexContentContainer from '../index/IndexContentContainer';
import { useTipsList } from './tips/useTipsList';

const CommunityRouteTipsCard = () => {
    const [tips] = useTipsList(6)
    
    return (
        <Card>
            <CardBodyBackgroundContainer height={600}>
                <CardTitle
                    icon={<img src={logo} alt="" className="img-fluid rounded" style={{ width: '35px', height: '35px' }} />}
                    title='책잇아웃의 꿀팁'
                    url='/community/tips'
                />

                {
                    Array.isArray(tips) && tips.map((tip) => {
                        return (
                            <IndexContentContainer href={`/community/tips/${tip.id}`}>
                                <TipsImage src={tip.displayImageUrl} />

                                <TextContainer>
                                    <Title>{tip.title}</Title>
                                    <Summary>{parse(tip.summary)}</Summary>
                                </TextContainer>
                            </IndexContentContainer>
                        )
                    })
                }
            </CardBodyBackgroundContainer>
        </Card>
    )
}

const TipsImage = styled.img`
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 60px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 120px);
    
    @media screen and (max-width: ${breakpoints.md}) {
        width: calc(100% - 70px);
    }
`;

const Title = styled.h5.attrs({
    className: 'clamp-1-line'
})`
`;

const Summary = styled.p.attrs({
    className: 'clamp-1-line text-secondary'
})`
    padding: 0px;
    margin: 0px;
`;

export default CommunityRouteTipsCard