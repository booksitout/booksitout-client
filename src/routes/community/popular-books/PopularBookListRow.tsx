import React from "react";
import styled from 'styled-components';
import PopularBookResponse from './PopularBookResponse'
import IndexContentContainer from '../../index/IndexContentContainer';
import ColSpacer from '../../../common/styles/ColSpacer';
import ColorConfig from '../../../config/ColorConfig';

interface Props {
    popularBook: PopularBookResponse
}

const PopularBookListRow: React.FC<Props> = ({ popularBook }) => {
    return (
        <IndexContentContainer href={popularBook.link} target='_blank'>
            <Row>
                <RankingBadge>{popularBook.ranking}</RankingBadge>

                <CoverContainer>
                    <Cover src={popularBook.coverUrl} />
                </CoverContainer>

                <ColSpacer size={5} />

                <InfoContainer>
                    <Title>{popularBook.title}</Title>
                    <Author>{popularBook.author.substring(0, 20)}</Author>
                </InfoContainer>
            </Row>
        </IndexContentContainer>
    )
}

const Row = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;

const CoverContainer = styled.div`
    min-width: 75px;
    max-width: 75px;
    justify-content: center;
    text-align: center;
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded',
})`
    height: 80px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    max-width: calc(100% - 75px);
`;

const Title = styled.h5.attrs({
    className: 'clamp-1-line'
})`
`;

const Author = styled.h6.attrs({
    className: 'text-secondary clamp-1-line'
})`
`;

const RankingBadge = styled.div`
    position: absolute;
    bottom: 0;     
    right: 0;   
    width: 25px;
    height: 25px;
    background-color: ${ColorConfig.Primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export default PopularBookListRow