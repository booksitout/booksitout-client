import styled from 'styled-components';
import ColorConfig from '../../../config/ColorConfig';
import IndexContentContainer from '../../index/IndexContentContainer';
import ImageConfig from '../../../config/ImageConfig';
import ColSpacer from '../../../common/styles/ColSpacer';
import LoadingBar from '../../../common/LoadingBar';

interface Props {
    index: number
}

const PopularBookListRowLoading: React.FC<Props> = ({ index }) => {
    return (
        <IndexContentContainer target='_blank'>
            <Row>
                <RankingBadge>{index}</RankingBadge>

                <CoverContainer>
                    <Cover src={ImageConfig.Placeholder.BookCover} />
                </CoverContainer>

                <ColSpacer size={5} />

                <Col>
                    <Title>
                        <LoadingBar size={2}/>
                    </Title>

                    <Author>
                        <LoadingBar size={2}/>
                    </Author>
                </Col>
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
    width: 100px;
    justify-content: center;
    text-align: center;
`;

const Cover = styled.img.attrs({
    className: 'img-fluid rounded',
})`
    height: 80px;
`;

const Title = styled.h5.attrs({
    className: 'clamp-1-line'
})`
`;

const Author = styled.h6.attrs({
    className: 'text-secondary clamp-1-line'
})`
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
`;

const RankingBadge = styled.div`
    position: absolute;
    bottom: 0;     
    right: 0;   
    width: 25px;
    height: 25xpx;
    background-color: ${ColorConfig.Primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export default PopularBookListRowLoading