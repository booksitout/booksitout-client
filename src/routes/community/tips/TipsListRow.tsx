import styled from 'styled-components';
import parse from 'html-react-parser'
import TipsResponse from './TipsResponse';
import breakpoints from '../../../config/Breakpoints';

interface Props {
    tip: TipsResponse
}

const TipsListRow: React.FC<Props> = ({ tip }) => {
    return (
        <>
            <TipsImage src={tip.displayImageUrl} />

            <TextContainer>
                <Title>{tip.title}</Title>
                <Summary>{parse(tip.summary)}</Summary>
            </TextContainer>
        </>
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

export default TipsListRow