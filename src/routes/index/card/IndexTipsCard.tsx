import styled from 'styled-components';
import parse from 'html-react-parser'
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import logo from '../../../images/logo.png'
import { useTipsList } from '../../community/tips/useTipsList'
import IndexContentContainer from '../IndexContentContainer';
import breakpoints from '../../../config/breakpoints';

const IndexTipsCard = () => {
    const [tips] = useTipsList(6)

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<img src={logo} alt="" className="img-fluid rounded me-2 mt-0 mt-md-1" style={{ width: '40px', height: '40px' }} />}
                    title={'책잇아웃의 꿀팁'}
                    subTitle={'책에 관한 여러 유용한 정보를 얻어갈 수 있어요'} 
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
            </CardBodyContainer>
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

export default IndexTipsCard