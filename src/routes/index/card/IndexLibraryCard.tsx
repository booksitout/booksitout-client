import styled from 'styled-components';
import { Card } from 'react-bootstrap'
import CardBodyContainer from '../../../common/styles/CardBodyContainer'
import CardTitle from '../../../common/styles/CardTitle'
import booksitoutIcon from '../../../config/booksitoutIcon'
import useLibraryNear from '../../library/useLibraryNear'
import IndexContentContainer from '../IndexContentContainer'
import useCurrentLocation from '../../library/useCurrentLocation';

const IndexLibraryCard = () => {
    const { lat, long, refreshLocation } = useCurrentLocation()
    const nearbyLibraries = useLibraryNear(lat, long)

    return (
        <Card>
            <CardBodyContainer>
                <CardTitle 
                    icon={<booksitoutIcon.library/>} 
                    title={'내 근처 도서관'} 
                    subTitle={'내 주변 도서관을 간단히 찾을 수 있어요'}
                />

                <Row>
                    {
                        nearbyLibraries.slice(0, 10).map((library) => {
                            return (
                                <Col>
                                    <IndexContentContainer href={`/library/${library.id}`}>
                                        <ImageContainer>
                                            <Image src={library.location.logo} />
                                        </ImageContainer>

                                        <ContentContainer>
                                            <InfoContainer>
                                                <Title>{library.name}</Title>
                                                <SubTitle>{library.location.address}</SubTitle>
                                            </InfoContainer>

                                            <DistanceContainer>
                                                {library.location.distance?.toPrecision(2)}km
                                            </DistanceContainer>
                                        </ContentContainer>
                                    </IndexContentContainer>
                                </Col>
                            )
                        })
                    }
                </Row>
            </CardBodyContainer>
        </Card>
    )
}

const Row = styled.div.attrs({
    className: 'row'
})`
`;

const Col = styled.div.attrs({
    className: 'col-12 col-md-6'
})`
`;

const ImageContainer = styled.div.attrs({
})`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img.attrs({
    className: 'img-fluid'
})`
    width: 80px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const InfoContainer = styled.div.attrs({
})`
`;

const DistanceContainer = styled.div.attrs({
})`
    text-align: right;
`;

const Title = styled.div.attrs({
    className: 'clamp-1-line'
})`
    font-size: 1.1rem;
    font-weight: bold;
`;

const SubTitle = styled.div.attrs({
    className: 'text-secondary'
})`
`;

export default IndexLibraryCard